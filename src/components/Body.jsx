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
            color: white;
            margin-left: 30px;
            
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