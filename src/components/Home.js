import React from 'react';
import Hero from './Hero';
import Featured from './Featured';
import Footer from './Footer';

const Home = ({coin}) => {
  return <div className='home-container'>
<Hero />
<Featured coin={coin}  />
<Footer />
  </div>;
};

export default Home;
