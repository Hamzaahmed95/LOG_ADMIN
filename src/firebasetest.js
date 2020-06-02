import React, { useState } from 'react';
import './App.css';
import { db } from './firebase';
import * as firebase from 'firebase';

function App() {

  const [runs, setRuns] = useState({
    ball: '',
    turn: ''
  });
  function handleClick(e) {
  //  var database = firebase.database();
    e.preventDefault();

   const result = firebase.database().ref().child('Team1Runs').push(runs);
  result.then((resolve)=>{
    console.log(resolve)
  })
  

  }
  function onChange(e) {
    const intValue = parseInt(e.target.value);
    setRuns({ ...runs, [e.target.name]: intValue});
  }
  return (
    <div className="App">
      <h1>Admin</h1>
      <form onSubmit={handleClick.bind(this)}>
        <label>
          Runs:
          <input onChange={onChange.bind(this)} name="ball" type="text" />
        </label>
        <label>
          Turn:
          <input onChange={onChange.bind(this)} type="text" name="turn" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
