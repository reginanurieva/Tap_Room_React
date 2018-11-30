import React from 'react';
import Header from './Header';
import Body from './Body';
import Menu from './Menu';
import NewDrink from './NewDrink';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
  menuList:[
    {
      name: "Hardcore Bull",
      contain: "Red Bull, Vodka, Fireball",
      purpose: "Totally waisted"
    },
    {
      name: "Little Slut",
      contain: "Vodka, Corona Beer, Sake, Orange Liquor",
      purpose: "For Tired Girls"
    },
    {
      name: "Wizzard of Loss",
      contain: "Vodka, Yegermeister, Brandy, Fanta",
      purpose: "Please take me to heaven"
    }
  ]
}
this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this)
};

handleAddingNewDrinkToList(newDrink){
    var newMasterDrinkList = this.state.menuList.slice();
    newMasterDrinkList.push(newDrink);
    this.setState({menuList: newMasterDrinkList});
  }

render(){
  return (
    <div className="main">
    <Header/>
    <style jsx>{`
        `}</style>
      <Switch>
        <Route exact path='/' render={()=><Menu menuList={this.state.menuList}/>}/>
        <Route path='/newdrink' render={() => <NewDrink onAddingNewDrinkToList={this.handleAddingNewDrinkToList}/>}/>
      </Switch>
    </div>
  );
}}

export default App;
