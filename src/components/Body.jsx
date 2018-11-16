import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Body(props){
  return (
    <div className="bodyComp">
    <style jsx>{`
          .bodyComp {
            height: 200px;
            text-align: left;
            // background-image: url(https://www.gannett-cdn.com/presto/2018/08/24/USAT/6de549a7-620f-4bfd-8a2a-f3d20477600a-GettyImages-846037086.jpg?crop=2120,1186,x0,y0&width=3200&height=1680&fit=bounds);
            // background-position: center;
            // background-size: contain;
            // background-repeat: no-repeat;
            color: white;
            
          }

        `}</style>
        <h3>{props.drink}</h3>
        <h4>{props.contain}</h4>
      <p><em>{props.purpose}</em></p>
      <hr/>
      {/* <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> */}
    </div>
  );
}

Body.propTypes = {
    drink: PropTypes.string,
    contain: PropTypes.string,
    purpose: PropTypes.string
  };

export default Body;