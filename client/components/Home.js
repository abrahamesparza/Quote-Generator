import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const Home = () => {
  let [quote, setQuote] = useState({
    text: '',
    author: ''
  });

  useEffect(() => {
    genQuote();
  }, []);

  let genQuote = () => {
    axios.get('https://type.fit/api/quotes')
    .then(res => {
      let data = res.data;
        let random = Math.floor(Math.random() * data.length);
        let assigned = data[random];
        setQuote({
          text: assigned.text,
          author: assigned.author
        });
    })
    .catch(err => console.error(err))
  }

  let genNewQuote = () => {
    genQuote();
  }

  return (
    <div className='home'>
      <h1 className='quoteText'>{quote.text}</h1>
      <h2 className='quoteAuthor'>{quote.author}</h2>
      <div className='buttonBar'>
        <ThumbDownIcon className='thumbDown' onClick={() => alert('thumb down')} />
        <button className='nextQuote' onClick={genNewQuote}>Next</button>
        <ThumbUpIcon  className='thumbUp' onClick={() => alert('thumb up')} />
      </div>

    </div>
  )
};

export default Home;