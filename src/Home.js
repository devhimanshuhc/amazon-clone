import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="49538094"
            title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
            price={299.99}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Midnight Blue/Gold, One Size"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL.AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Certified Refurbished Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={29.99}
            image="https://m.media-amazon.com/images/I/61IxWv3ecpL._AC_SX500_.jpg"
            rating={3}
          />
          <Product
            id="3254354345"
            title="Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)"
            price={139.99}
            image="https://m.media-amazon.com/images/I/719UcXKzXHL._AC_SX466_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id='90829332'
            title="SAMSUNG Odyssey G7 Series 27-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC27G75TQSNXZA)"
            price={79.99}
            image="https://m.media-amazon.com/images/I/61Sz-1cB+PL._AC_SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
