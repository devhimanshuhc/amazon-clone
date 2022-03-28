import React from "react";
import "./Home.css";
import Product from "./Product";
import { TabTitle } from "./utils/GeneralFunctions";
import { motion } from "framer-motion";

export default function Home() {
  TabTitle("Home-Amazon Clone");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://i.pinimg.com/originals/79/1c/aa/791caae6a49ae8228206006ebd2173e7.gif"
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
              id="90829332"
              title="SAMSUNG Odyssey G7 Series 27-Inch WQHD (2560x1440) Gaming Monitor, 240Hz, Curved, 1ms, HDMI, G-Sync, FreeSync Premium Pro (LC27G75TQSNXZA)"
              price={79.99}
              image="https://m.media-amazon.com/images/I/61Sz-1cB+PL._AC_SX679_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
