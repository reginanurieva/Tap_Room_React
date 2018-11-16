import React from 'react';
import Header from './Header';
import Body from './Body';
import Menu from './Menu';
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
    <Menu/>
    <style jsx>{`
          .main {
            // height: 700px;
            text-align: left;
            background-image: url(https://www.gannett-cdn.com/presto/2018/08/24/USAT/6de549a7-620f-4bfd-8a2a-f3d20477600a-GettyImages-846037086.jpg?crop=2120,1186,x0,y0&width=3200&height=1680&fit=bounds);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            
          }

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
