import React from 'react';
import Header from './Header';
import Body from './Body';
import Menu from './Menu';
import NewDrink from './NewDrink';
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
    <div className="main">
    <Header/>
    
    <style jsx>{`
          // .main {
          //   // height: 900px;
          //   text-align: left;
          //   background-position: center;
          //   background-size: contain;
          //   background-repeat: no-repeat;
            
          // }

        `}</style>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/newdrink' component={NewDrink} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
