import React from 'react';
// import axios from 'axios'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Featured.css'

const Featured = ({coin}) => {
  //   const [coin, setCoin] = useState([])

  //   const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  
  // useEffect(() => {
  //   axios.get(url).then(res=> {
  //     setCoin(res.data)
  //     console.log(res.data);
  //   }).catch(error => console.log(error))
  // }, [])
  
  // if (!coin) return null

  return (
  <div className='featured'>
      <div className='container'>
      <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                   
                    <Link to='/coins' className='btn-featured-div'>
                   <button className='btn-featured'>See More Coins</button> 
                    </Link>
               
                </div>

        <div className="right">
            <div className="card">
                <div className="top"> 
              {coin[0] ? <img src={coin[0].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[0] ? <h5>{coin[0].name} </h5> : null }
                  {coin[0] ? <p> $ {coin[0].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[0]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[0].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[0]? <span> {coin[0].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>

            <div className="card">
                <div className="top"> 
              {coin[1] ? <img src={coin[1].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[1] ? <h5>{coin[1].name} </h5> : null }
                  {coin[1] ? <p> $ {coin[1].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[1]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[1].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[1]? <span> {coin[1].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>

            <div className="card">
                <div className="top"> 
              {coin[2] ? <img src={coin[2].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[2] ? <h5>{coin[2].name} </h5> : null }
                  {coin[2] ? <p> $ {coin[2].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[2]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[2].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[2]? <span> {coin[2].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>

            <div className="card">
                <div className="top"> 
              {coin[3] ? <img src={coin[3].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[3] ? <h5>{coin[3].name} </h5> : null }
                  {coin[3] ? <p> $ {coin[3].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[3]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[3].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[3]? <span> {coin[3].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>

            <div className="card">
                <div className="top"> 
              {coin[4] ? <img src={coin[4].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[4] ? <h5>{coin[4].name} </h5> : null }
                  {coin[4] ? <p> $ {coin[4].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[4]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[4].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[4]? <span> {coin[4].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>

            <div className="card">
                <div className="top"> 
              {coin[5] ? <img src={coin[5].image} alt=""  /> : null }
                </div>
                <div>
                 {coin[5] ? <h5>{coin[5].name} </h5> : null }
                  {coin[5] ? <p> $ {coin[5].current_price.toLocaleString()} </p> : null}
                </div>
                {coin[5]?.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                  <FiArrowDown className='icon' />
                            { <span> {coin[5].price_change_percentage_24h.toFixed(2)}%</span> }
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                              {coin[5]? <span> {coin[5].price_change_percentage_24h.toFixed(2)}% </span> : null }
                            </span> 
                       
                        )
                        }
            </div>
           
        </div>

      </div>
  </div>)
};

export default Featured;
