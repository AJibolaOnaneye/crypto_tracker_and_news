import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CoinItems from './CoinItems';
import { Link } from 'react-router-dom';
import CoinInfo from '../route/CoinInfo';
import './Coin.css';

const Coin = () => {
  const [coin, setCoin] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [postPerPage] = useState(50)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url).then(res => {
        setCoin(res.data)
        console.log(res.data);
    }).catch(error => console.log(error))
}, [url])

    //Get Current page
    const indexOfLastPost = currentPage * postPerPage;
    const currentPost = coin
    .slice(indexOfLastPost, indexOfLastPost + postPerPage)
    .map(({id,image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap})=> (
      <Link to={`/coin/${id}`} element={<CoinInfo />} key={id}>
        <CoinItems key={id} id={id} image={image} symbol={symbol} current_price={current_price} total_volume={total_volume} price_change_percentage_24h={price_change_percentage_24h} market_cap={market_cap}  />
      </Link>
    ))

    const pageCount = Math.ceil(coin.length / postPerPage);
    const changePage = ({ selected }) => {
      setCurrentPage(selected);
      window.scrollTo(0, 0)
    };

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

      {currentPost}

      <ReactPaginate
           previousLabel={"Prev"}
           nextLabel={"Next"}
           pageCount={pageCount}
           onPageChange={changePage}
           containerClassName={"paginationBttns"}
           previousClassName={"previousBttn"}
           nextClassName={"nextBttn"}
           disabledClassName={"paginationDisabled"}
           activeClassName={"paginationActive"}
         />

      {/* {
          coin.map((item) => (
            <Link to={`/coin/${item.id}`} element={<CoinInfo />} key={item.id}>
          <CoinItems coin={item} />
            </Link>
          ))
      } */}

  </div>
  </div>)
  
};

export default Coin;
