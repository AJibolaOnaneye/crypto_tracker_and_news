import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify'
import './coininfo.css'
// import Footer from '../components/Footer';
// import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';


const CoinInfo = () => {

  const params = useParams();
  const [coin, setCoin] = useState({});


  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`



  useEffect(() => {

    const timer = setInterval(() =>  axios.get(url).then(response => {
        setCoin(response.data)
        console.log();
    }).catch(error => {
        console.log(error);
    }), 1000);

    return () => clearInterval(timer);

    // axios.get(url).then(response => {
    //     setCoin(response.data)
    //     console.log();
    // }).catch(error => {
    //     console.log(error);
    // })
}, [url])


  return <div>
      <div className='coin-container'>
    <div className="content">

      <div className='header_container'>
      <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
      <h2> {coin.name} 
      {/* {coin.image ? <img src={coin.image.small} alt="" /> : null}  */}
      </h2>

      </div>

      <div className='info'>
                        <div className='coin-heading'>
                            <span className='coin-image'> {coin.image ? <img src={coin.image.small} alt='' /> : null}</span> 
                            <span className='coin-name-sub'>
                            <p className='coin-name-p'  >{coin.name}</p> <br/>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                            </span>
                            
                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>          

                    </div>
                    <div className="table-container">
<table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>{coin.market_data?.price_change_percentage_1h_in_currency ?  <span>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1) > 0 ? <span className='green' >{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</span> : <span className='red'>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</span> }</span> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <span>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1) > 0 ? <span className='green' >{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</span> : <span className='red'>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</span> }</span> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <span>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1) > 0 ? <span className='green'>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</span>: <span className='red'>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</span> }</span> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <span>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1) > 0 ?  <span className='green'>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</span> :  <span className='red'>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</span>}</span> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <span>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1) > 0 ? <span className='green'>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</span> : <span className='red'>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</span>}</span> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <span>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1) > 0 ? <span className='green'>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</span> : <span className='red'>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</span>}</span> : null}</td>

                            </tr>
                        </tbody>
                    </table>
</div>



              <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                           
                                 </div>
                                 <div className='row'>
                                <h4>Market Cap change 24h</h4>
                                {coin.market_data?.market_cap_change_24h ? <p>${coin.market_data.market_cap_change_24h.toLocaleString()}</p> : null}
                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Trading Volume</h4>
                                {coin.market_data?.total_volume ? <p> ${coin.market_data.total_volume.usd.toLocaleString()}</p> : null}
                            </div>

                        </div>
                    </div>

                    <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        
                        </p>

                    </div>
                </div>



    </div>
      
  </div>

{/* <Footer/> */}

  </div>
};

export default CoinInfo;
