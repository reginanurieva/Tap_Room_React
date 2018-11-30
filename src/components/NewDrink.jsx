import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewDrink(props) {
  
  let _name = null;
  let _contain = null;
  let _purpose = null;

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewDrinkToList({name: _name.value, contain: _contain.value, purpose:_purpose.value});
    _name.value = '';
    _contain.value = '';
    _purpose.value = '';
  }
  return (
      <div>
        <form onSubmit={handleNewDrinkFormSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Drink Name'
            ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='contain'
            placeholder='Contain'
            ref={(input) => {_contain = input;}}/>
          <textarea
            id='purpose'
            placeholder='Purpose'
            ref={(textarea) => {_purpose = textarea;}}/>
          <button type='submit'>Add a new Masterpiece</button>
        </form>
      </div>
    );
  }

export default NewDrink;
