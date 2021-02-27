import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Landing from './Landing';

const Home = ({ page, show, pageChange, closeModal }) => {
  let [quote, setQuote] = useState({
    text: '',
    author: ''
  });

  useEffect(() => {
    genQuote();
  }, []);

  let genQuote = () => {
    /*
    updated api - previous api stopped working
      need to populate database with quote info
      so i don't depend on this api's availibility
    */
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log('res:', res);
      let data = res.data;
        // let random = Math.floor(Math.random() * data.length);
        // let assigned = data[random];
        setQuote({
          text: data.content,
          author: data.author
        });
    })
    .catch(err => console.error(err))
  }

  let genNewQuote = () => {
    genQuote();
  }

  let favoriteQuote = () => {
    let data = {
      text: quote.text,
      author: quote.author,
      favorite: true
    }
    axios.post('/favorite/quote', data)
    .then(res => console.log('quote res:', res))
    .catch(err => console.error(err));
    genNewQuote();
  }

  return (
    <div className='home'>
      <h1 className='quoteText'>{quote.text}</h1>
      <h2 className='quoteAuthor'>{quote.author}</h2>
      <div className='buttonBar'>
        <ThumbDownIcon className='thumbDown' fontSize='large' onClick={genNewQuote} />
        <ThumbUpIcon  className='thumbUp' fontSize='large' onClick={favoriteQuote} />
      </div>

    </div>
  )
};

export default Home;