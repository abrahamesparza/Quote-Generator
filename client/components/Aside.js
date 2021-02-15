import React from 'react';
import '../styles/aside.css'

const Aside = () => {
  return (
    <aside>
    <h2>Favorite Quotes</h2>
    <div className='asideBody'>
      {/* dummy data for visual */}
      <ul>
        <li>dummy</li>
        <li>data</li>
        <li>for</li>
        <li>visualization</li>
      </ul>
    </div>
    </aside>
  )
};

export default Aside;