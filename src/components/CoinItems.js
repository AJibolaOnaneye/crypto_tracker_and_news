import React from 'react';
import './Coin.css'

const CoinItems = ({coin}) => {
  return   <div className='coin-row'>
  <div className='img-symbol'>
      <img className='img-coin' src={coin.image} alt='' />
      <p>{coin.symbol.toUpperCase()}</p>
  </div>
  <p>{coin.id}</p>
  <p>${coin.current_price.toLocaleString()}</p>
  <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
  <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
  <p className='hide-mobile'>${coin.market_cap.toLocaleString()}</p>
</div>;
};

export default CoinItems;
