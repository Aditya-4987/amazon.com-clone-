import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://m.media-amazon.com/images/I/71h15GsHkvL._SX3000_.jpg"
          alt="home_image1"
          className="home_image"
        />
        {/* <img src='https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg' alt='home_image2' className='home_image' />
            <img src='https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg' alt='home_image3' className='home_image' />
            <img src='https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg' alt='home_image4' className='home_image' /> */}
        <div className="home_row">
          <Product
            id="001"
            title='Kodak PIXPRO Astro Zoom AZ528-BK 16 MP Digital Camera with 52x Optical Zoom 24mm Wide Angle Lens 6 fps Burst Shooting 1080P Full HD Video Wi-Fi Connectivity and a 3" LCD Screen (Black) '
            price={29.99}
            image="https://m.media-amazon.com/images/I/7127mWGA51L._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="002"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61BKYlNqH6L._AC_SL1000_.jpg"
            rating={4}
          />
          <Product
            id="003"
            title="Nikon D5300 24.2 MP CMOS Digital SLR Camera with 18-55mm f/3.5-5.6G ED VR Auto Focus-S DX NIKKOR Zoom Lens (Black) "
            price={29.99}
            image="https://m.media-amazon.com/images/I/91cpz0N7KoL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="004"
            title="ASUS ROG Swift 32” 4K OLED Gaming Monitor (PG32UCDM) - UHD (3840 x 2160), QD-OLED, 240Hz, 0.03ms, G-SYNC Compatible, Custom Heatsink, Graphene Film, 99% DCI-P3, True 10-bit, 90W USB-C "
            price={29.99}
            image="https://m.media-amazon.com/images/I/91t16+g29KL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="005"
            title="LG UltraWide QHD 34-Inch Curved Computer Monitor 34WQ73A-B, IPS with HDR 10 Compatibility, Built-In-KVM, and USB Type-C, Black "
            price={29.99}
            image="https://m.media-amazon.com/images/I/813lcdih06L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="006"
            title="Portable Monitor 15.6-inch FHD 1080P Ultra-Slim Travel External Monitor HDR IPS Gaming Display with Kickstand &Speakers USB-C HDMI Plug&Play for Laptop PC Phone PS4/5 Xbox Switch "
            price={29.99}
            image="https://m.media-amazon.com/images/I/711Waoij3NL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="007"
            title="SAMSUNG 27-Inch Odyssey G3 (GPortable30D) Series FHD Gaming Monitor, 1ms, 180Hz, AMD FreeSync, Adjustable Stand, Black Equalizer, Virtual Aim Point, Eye Saver Mode, Flicker-Free, LS27DG302ENXZA, 2024 "
            price={29.99}
            image="https://m.media-amazon.com/images/I/81HN5m6HR8L._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row"></div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
