import React from 'react';

function NewDrink(){
  return (
    <div className="container">
    <br/>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Drink Name'/>
        <input
          type='text'
          id='location'
          placeholder='Ingredients'/>
        <input
          id='issue'
          placeholder='Purpose'/>
          <br/>
          <br/>
        <button className="btn btn-danger" type='submit'>Add new Masterpiece</button>
      </form>
    </div>
  );
}

export default NewDrink;