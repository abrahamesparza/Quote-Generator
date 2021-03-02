import React from 'react';
import '../styles/about.css';

const About = () => {
  let tech = ['React', 'NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Webpack', 'JSON Web Tokens'];
  return (
    <div className='about'>
      <h1 className='pageTitle'>About</h1>
      <div className='aboutDescription'>
        <p>It is easy to become distracted in our day of age. So many sites are filled with advertisements and algoithms to influence our way of thinking.</p>
        <p>This app is intended to filter out the garbage. Now, you can discover quotes from various people throughout our history without having to be bombarded by ads and algorithm tricks.</p>
        <span></span>
        <h2>This app was built using:</h2>
        <ul>{tech.map(item => <li>{item}</li>)}</ul>
        </div>
    </div>
  )
}

export default About;