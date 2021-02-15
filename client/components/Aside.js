import React, { useState, useEffect } from 'react';
import '../styles/aside.css'
import axios from 'axios';

const Aside = () => {
  let [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavorites();
  }, [favorites]);

  let getFavorites = () => {
    axios.get('/favorites')
    .then(res => {
      setFavorites(res.data);
    })
    .catch(err => console.error(err))
  }

  return (
    <aside>
    <h2>Favorite Quotes</h2>
    <div className='asideBody'>
      <ul>
        {favorites.map(quote => {
          return <li>{quote.text}</li>
        })}
      </ul>
    </div>
    </aside>
  )
};

export default Aside;