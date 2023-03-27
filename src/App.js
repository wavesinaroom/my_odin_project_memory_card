import './App.css';
import Set from './components/set';
import Score from './components/score';
import {useState} from 'react';

function App() {
  let clicked = []

  function checkClicked(name){
    alert(`Calling ${name} from app.js`)
    if(clicked[4]){

      //Reset clicked - current score - best score
    }else{
      if(clicked.find(click => click === name)){
        //Reset current score
        alert('Found')
      }
      else{
        //Update clicked - Check best - increase current
        clicked.push(name)    
      }
    }
    alert(clicked);
  }
  return (
    <>
      <Score/>
      <Set action={checkClicked}/>
    </>
  );
}

export default App;
