const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');

const jwt = require('jsonwebtoken');
const secret = 'secretToSignToken'

const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3003;

const db = require('../database/db.js')
const { Users } = require('../database/signupSchema.js');
const { Logins } = require('../database/loginSchema.js');
const { Quotes } = require('../database/quoteSchema.js');

const auth = require('./middleware/auth.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors({credentials:true, origin: 'localhost:3003'}));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.status(200).send('HELLO ABRAHAM');
});

// checks if user is authenticated to access home page
app.get('/home', auth, (req, res) => {
  res.status(200).send('Success');
})
// checks if theres a valid token
app.get('/checkToken', auth, (req, res) => {
  res.sendStatus(200);
})

/* authentication API */

app.post('/authenticate', (req, res) => {
  const { email, password } = req.body;
  Users.findOne({ email: email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({error: 'Internal error please try again'});
    } else if (!user) {
      res.status(401).json({error: 'Incorrect email or password'})
    } else {
      Users.validatePassword(password, (err, match) => {
        if (err) {
          res.status(500).json({error: 'Internal error please try again'});
        } else if (!match) {
          res.status(401).json({error: 'Incorrect email or password'});
        } else {
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn:'1h'
          });
          res.cookie('token', token, {
            httpOnly: true
          }).sendStatus(200);
        }
      });
    }
  });
});

/* authentication API */

/* USER ROUTES */

app.get('/users', (req, res) => {
  Users.find((err, data) => {
    console.log('existing users:', data);
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.post('/new/user', (req, res) => {
  let userData = req.body;
  let user = Users.findOne({email:userData.email})
  console.log('user', user)
  console.log('email', userData.email)
  if (user.email === userData.email) {
    res.send('user exists');
  } else {
    bcrypt.hash(userData.password, saltRounds, (err, hash) => {
      userData.password = hash;
      if (err) console.log('Error hashing', err);
      Users.create(userData, (err, data) => {
        console.log('created user:', data);
        if (err) res.status(500).send(err);
        else {
          const payload = userData.email;
          // let token = jwt.sign(payload, secret, {
          //   exp:'1h'
          // });
          let token = jwt.sign({
            exp: 3600,
            data: payload,
          }, secret)
          res.cookie('token', token, {
            httpOnly: true
          }).redirect('/checkToken');
        }
      });
    });
  }
});

app.post('/login/user', (req, res) => {
  let userData = req.body;
  Users.findOne({ email: userData.email })
  .then(user => {
    if (!user) res.send('account does not exist with provided email')
    else {
      bcrypt.compare(userData.password, user.password, (err, data) => {
        if (err) console.log('err', err);
        else if (data) {
          res.status(200).json({message: 'login verified!'})
        } else {
          res.status(400).json({message: 'invalid password'})
        }
      })
    }
  })
});

/* USER ROUTES */

/* QUOTE ROUTES */

app.post('/favorite/quote', (req, res) => {
  let quoteData = req.body;
  console.log('quoteData:', quoteData);
  Quotes.create(quoteData, (err, data) => {
    if (err) res.status(400).send('Error');
    else res.status(201).send(data);
  });
});

app.get('/favorites', (req, res) => {
  Quotes.find( {favorite: true} , (err, data) => {
    if (err) res.status(500).send('Error');
    else res.status(200).send(data);
  });
});

app.delete('/remove/quote', (req, res) => {
  let id = req.body;
  console.log('req body', id);
  Quotes.deleteOne({ _id: id}, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  })
})

/* QUOTE ROUTES */


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});