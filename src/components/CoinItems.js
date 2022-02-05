import React from 'react';
import './Coin.css'

const CoinItems = ({id,image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap}) => {
  return   <div className='coin-row'>
  <div className='img-symbol'>
      <img className='img-coin' src={image} alt='' />
      <p>{symbol.toUpperCase()}</p>
  </div>
  <p>{id}</p>
  <p>${current_price.toLocaleString()}</p>
  <p className='hide-mobile'>${total_volume.toLocaleString()}</p>
  <p>{price_change_percentage_24h.toFixed(2)}%</p>
  <p className='hide-mobile'>${market_cap.toLocaleString()}</p>
</div>;
};

export default CoinItems;
