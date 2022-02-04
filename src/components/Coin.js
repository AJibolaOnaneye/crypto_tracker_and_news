import React from 'react';
import './Coin.css';
import CoinItems from './CoinItems';
import { Link } from 'react-router-dom';
import CoinInfo from '../route/CoinInfo';

const Coin = ({coin}) => {
  return (
  <div className='market-container'>
<div className='container'>
      <div className="heading">
          <div className="">Market</div>
          <div className="hide-mobile">Coins</div>
          <div className="">Price</div>
          <div className="hide-mobile">Volume</div>
          <div className="">24h change</div>
          <div className="hide-mobile">Market Cap</div>
      </div>

      

      {
          coin.map((item) => (
            <Link to={`/coin/${item.id}`} element={<CoinInfo />} key={item.id}>
          <CoinItems coin={item} />
            </Link>
          ))
      }

  </div>
  </div>)
  
};

export default Coin;
