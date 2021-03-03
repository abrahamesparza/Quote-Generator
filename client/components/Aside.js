import React, { useState, useEffect } from 'react';
import '../styles/aside.css'
import axios from 'axios';
import RemoveIcon from '@material-ui/icons/Remove';

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

  let removeQuote = (id) => {
    let set = [...favorites];
    let index = set.indexOf(id);
    axios.delete('/remove/quote', { data: { _id: id } })
    .then(res => {
      if (index !== -1) {
        set.splice(index, 1);
        setFavorites(set);
      }
    })
    .catch(err => console.error(err));
  };
  return (
    <aside>
    <h2>Favorite Quotes</h2>
    <div className='asideBody'>
      <ul>
        {favorites.map(quote => {
          return <li key={quote._id} onClick={() => removeQuote(quote._id)}>{quote.text}&nbsp;&nbsp;&nbsp;&nbsp;<RemoveIcon className='removeIcon' fontSize='small' /><br/>-&nbsp;{quote.author}</li>
        })}
      </ul>
    </div>
    </aside>
  )
};

export default Aside;