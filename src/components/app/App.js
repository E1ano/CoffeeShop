import React from "react";
import CoffeeHouse from "../../pages/coffeeHouse/CoffeeHouse";
import {Route, Routes} from "react-router-dom";
import OurCoffee from "../../pages/ourCoffee/OurCoffee";
import coffee from "../../images/coffee.jpeg";
import ForYourPleasure from "../../pages/forYourPleasure/ForYourPleasure";

function App() {
    const coffeeHouseCards = [
        {title: "Solimo Coffee Beans 2 kg", price: 10.73, imgUrl: coffee, mainPage: true},
        {title: "AROMISTICO Coffee 1 kg", price: 15.99, imgUrl: coffee, mainPage: true},
        {title: "AROMISTICO Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: true},
    ]

    const ourCoffeeCards = [
        {title: "AROMISTICO1 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Brazil" },
        {title: "AROMISTICO2 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Kenya" },
        {title: "AROMISTICO3 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Columbia" },
        {title: "AROMISTICO4 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Brazil" },
        {title: "AROMISTICO5 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Columbia" },
        {title: "AROMISTICO6 Coffee 1 kg", price: 6.99, imgUrl: coffee, mainPage: false, country: "Kenya" }
    ]

  return (
     <>
        <Routes>
            <Route path="/" element={<CoffeeHouse cards={coffeeHouseCards}/>}/>
            <Route path="/our-coffee" element={<OurCoffee cards={ourCoffeeCards}/>}/>
            <Route path="/for-your-pleasure" element={<ForYourPleasure cards={ourCoffeeCards}/>}/>
        </Routes>
    </>
  );
}

export default App;
