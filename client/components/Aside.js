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
      console.log('GET res:', res)
      setFavorites(res.data);
    })
    .catch(err => console.error(err))
  }
  console.log('favorite quotes', favorites);

  return (
    <aside>
    <h2>Favorite Quotes</h2>
    <div className='asideBody'>
      {/* dummy data for visual */}
      <ul>
        {favorites.map(quote => {
          {/* need to consider string length so quote doesnt overlap side bar */}
          if (quote.text.length > 20) {
            let fav = quote.text.slice(0, 50);
            return <li>{fav}</li>
          }
        })}
      </ul>
    </div>
    </aside>
  )
};

export default Aside;