import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <style jsx>{`
        .header {
          height: 100px;
          border: 1px black solid;
          text-align: center;
          // background-image: url(https://www.gannett-cdn.com/presto/2018/08/24/USAT/6de549a7-620f-4bfd-8a2a-f3d20477600a-GettyImages-846037086.jpg?crop=2120,1186,x0,y0&width=3200&height=1680&fit=bounds);
          // background-position: center;
          // background-size: contain;
          // background-repeat: no-repeat;
        }
      `}</style>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Header;
