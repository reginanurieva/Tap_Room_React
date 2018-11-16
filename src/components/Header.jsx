import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <style jsx>{`
        .header {
          height: 100px;
          text-align: center;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(https://www.take3.org/wp-content/uploads/2018/03/Glitter.png);
        }
        h1 {
          font-family: fantasy;
          font-weight: 600;
          color: #423d7f;
        }
      `}</style>
      <h1>Regina's Dream Bar</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
