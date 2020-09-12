import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (

    


    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon__home__banner"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="Beats Studio3 Wireless Noise Cancelling On-Ear Headphones - Apple W1
          Headphone Chip, Class 1 Bluetooth, Active Noise Cancelling, 22 Hours
          Of Listening Time - Midnight Black"
            price={349.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71ka5tG2vTL._AC_SX679_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="SH 2.6M x 3M/8.5ft x 10ft Background Support System and 4 x 85W 5500K Bulbs, Umbrellas Softbox Continuous Lighting Kit for Photo Studio Product,Portrait and Video Shoot Photography"
            price={132.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71C2rDyOhIL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
          id="4903850"
          title="Fahrenheit 451 Paperback – January 10, 2012"
          price={8.29}
          image="https://images-na.ssl-images-amazon.com/images/I/41qI9quGIdL._SX324_BO1,204,203,200_.jpg"
          rating={4}
          
          />
          <Product
          id="23445930"
          title="1984 (Signet Classics) (Cover may vary) Mass Market Paperback – Unabridged, January 1, 1961"
          price={6.86}
          image="https://images-na.ssl-images-amazon.com/images/I/41h5dDUzJhL._SX277_BO1,204,203,200_.jpg"
          rating={4}
          />
          <Product
          id="3254354345"
          title="Rollerblade Microblade Adjustable Fitness Inline Skate, Black and Red,Performance Inline Skates"
          price={109.99}
          image="https://images-na.ssl-images-amazon.com/images/I/91uPu-GtJVL._AC_SX425_.jpg"
          rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Pioneer DJ DJ System (XDJ-RX2)"
            price={1699.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61gXayWowbL._AC_SX425_.jpg"
            rating={5}
          
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
