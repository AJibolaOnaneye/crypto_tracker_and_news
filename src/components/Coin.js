import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import CoinItems from './CoinItems';
import { Link } from 'react-router-dom';
import CoinInfo from '../route/CoinInfo';
import Searchbar from './SearchBar'
import './Coin.css';


const Coin = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0)
  const [postPerPage] = useState(50)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false`

  useEffect(() => {
    axios.get(url).then(res => {
        setCoins(res.data)
        console.log(res.data);
    }).catch(error => console.log(error))
}, [url])

const allCoins = coins.filter(coin =>  {
  if(search === "") {
    return coin;
  } else if( coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()) ){
    return coin;
  } return null
  // eslint-disable-next-line
}
);

const handleChange = e => {
  e.preventDefault();

  setSearch(e.target.value.toLowerCase());
};

    //Get Current page
    const indexOfLastPost = currentPage * postPerPage;
    const currentPost = coins && allCoins
    .slice(indexOfLastPost, indexOfLastPost + postPerPage)
    .map(({id,image, symbol, current_price, total_volume, price_change_percentage_24h, market_cap})=> (
      <Link to={`/coin/${id}`} element={<CoinInfo />} key={id}>
        <CoinItems key={id} id={id} image={image} symbol={symbol} current_price={current_price} total_volume={total_volume} price_change_percentage_24h={price_change_percentage_24h} market_cap={market_cap}  />
      </Link>
    ))

    const pageCount = Math.ceil(coins.length / postPerPage);
    const changePage = ({ selected }) => {
      setCurrentPage(selected);
      window.scrollTo(0, 0)
    };

   

  return (
    <div className="market-div">
  <div className='market-container'>
<div className='container'>
<Searchbar  type='text' placeholder='Search' onChange={handleChange}/>
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
  </div>
    </div>
  )
  
};

export default Coin;
