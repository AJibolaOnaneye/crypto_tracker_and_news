import React from 'react';
import HeroImage from '../assets/hero-img.svg'
import './Hero.css'


const Hero = () => {
  return <>
<div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                <h1> CRYPTO<br /> INFORMATION <br /> MADE EASY </h1>
                    {/* <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div> */}
                    <p>Get the latest and trending crypto news and track your <br /> favorite currencies. </p>
                   <div className='btn-div' ><button className='btn-hero' >Get Started</button> </div> 
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img className='hero-img' src={HeroImage} alt=''/>
                    </div>
                </div>
            </div>
        </div>
  </>;
};

export default Hero;
