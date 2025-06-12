import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img src='https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg' alt='home_image1' className='home_image' />
            {/* <img src='https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg' alt='home_image2' className='home_image' />
            <img src='https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg' alt='home_image3' className='home_image' />
            <img src='https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg' alt='home_image4' className='home_image' /> */}
            <div className='home_row'>
                <Product id="01" title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
                <Product id="02" title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
                <Product id="03" title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
            </div>
            <div className='home_row'>
                <Product title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
                <Product title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
                <Product title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
                <Product title="The lean startup" price={29.99} image="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" rating={5}/>
            </div>
            <div className='home_row'>
            </div>
            <div className='home_row'>
            </div>
            <div className='home_row'>
            </div>
        </div>
    </div>
  )
}

export default Home