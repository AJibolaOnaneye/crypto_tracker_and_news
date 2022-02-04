import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';
import Coin from './components/Coin';
import CoinInfo from './route/CoinInfo';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/Footer';



const App = () => {
  const [coin, setCoin] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  // const url = "https://crypto-news-live3.p.rapidapi.com/news"

useEffect(() => {
  axios.get(url).then(response => {
    setCoin(response.data)
    // console.log(response.data);
  }).catch(error => console.log(error))
}, [])

if (!coin) return null


  return (
    <BrowserRouter>
    
    <div className="App">
   <Navbar />
   <Routes>
     <Route path='/' exact element={<Home coin={coin} />} />
     <Route path='/coins' exact element={<Coin coin={coin} />} />
     <Route path='/blogs' exact element={<Blog />} />
     <Route path='/about' exact element={<About />} />

     <Route path='/coin' exact element={<CoinInfo />} >
     <Route path=':coinId' element={<CoinInfo />} />
     </Route>
     
   </Routes>
   {/* <Featured /> */}
   <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
