import React from "react";
import Body from "./Body";
import { Link } from "react-router-dom";

var menuList = [
  {
    drink: "Hardcore Bull",
    contain: "Red Bull, Vodka, Fireball",
    purpose: "Totally waisted"
  },
  {
    drink: "Little Slut",
    contain: "Vodka, Corona Beer, Sake, Orange Liquor",
    purpose: "For Tired Girls"
  },
  {
    drink: "Wizzard of Loss",
    contain: "Vodka, Yegermeister, Brandy, Fanta",
    purpose: "Please take me to heaven"
  }
];

function Menu() {
  return (
    <div className="menu">
      <style jsx>{`
        .menu {
          height: 700px;
          text-align: left;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(
            https://www.gannett-cdn.com/presto/2018/08/24/USAT/6de549a7-620f-4bfd-8a2a-f3d20477600a-GettyImages-846037086.jpg?crop=21201186x0y0&width=3200&height=1680&fit=bounds);
        }
        button {
            background-color: white;
            color: black;
            float: center;
            margin-left: 40px;
        }
      `}</style>
      <hr />
      {menuList.map((cocktail, index) => (
        <Body
          drink={cocktail.drink}
          contain={cocktail.contain}
          purpose={cocktail.purpose}
          key={index}
        />
      ))}
      <Link to="/newdrink"><button>Add new Creation</button></Link>
    </div>
  );
}

export default Menu;
