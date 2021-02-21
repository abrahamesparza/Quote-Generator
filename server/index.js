const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors');
const connectionUrl= require('../database/url.js').connectionUrl;

const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoSession = require ('connect-mongodb-session')(session);
const store = new MongoSession({
  uri: connectionUrl,
  collection: 'sessions'
})

const bcrypt = require('bcrypt');
const saltRounds = 10;

const port = process.env.PORT || 3003;

const db = require('../database/db.js')
const { Users } = require('../database/signupSchema.js');
const { Logins } = require('../database/loginSchema.js');
const { Quotes } = require('../database/quoteSchema.js');


const app = express();
app.use(cookieParser());
app.use(session({
  secret: 'key to sign cookie',
  resave: false,
  saveUninitialized: false,
  store: store
}));
app.use(bodyParser.json());
app.use(express.static(path.join('public')));
app.use(cors({credentials:true, origin: 'localhost:3003'}));

app.get('/session', (req, res) => {
  req.session.isAuth = true;
  console.log('session', req.session);
  console.log(req.session.id);
  res.render('index');
})

app.get('/', (req, res) => {
  req.session.isAuth = true;
  console.log(req.session);
  res.status(200).send('HELLO ABRAHAM');
});

/* cookie test route */
app.get('/cookies', (req, res) => {
  console.log('/cookies route', req.cookies);
  if (!req.cookies.token) res.status(401).send('error')
  else res.status(200).json({ secret: 'hello mello jello'})
})
/* cookie test route */

/* USER ROUTES */

app.get('/users', (req, res) => {
  Users.find((err, data) => {
    console.log('existing users:', data);
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

app.post('/new/user', async (req, res) => {
  let userData = req.body;
  let user = await Users.findOne({email:userData.email})
  if (user) {
    res.status(401).send('Account exists with email');
  } else {
    bcrypt.hash(userData.password, saltRounds, (err, hash) => {
      userData.password = hash;
      if (err) console.log('Error hashing', err);
      Users.create(userData, (err, data) => {
        console.log('created user:', data);
        if (err) res.status(500).send(err);
        else res.status(200).send(data);
      });
    });
  }
});

app.post('/login/user', (req, res) => {
  let userData = req.body;
  Users.findOne({ email: userData.email })
  .then(user => {
    if (!user) res.status(400).json({message: 'user does not exist'})
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