import React from 'react';
import Header from './Header';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
    <Header/>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>
      taproom
      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
