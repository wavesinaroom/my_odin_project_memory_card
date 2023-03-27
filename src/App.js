import './App.css';
import Set from './components/set';
import Score from './components/score';
import {useState} from 'react';

function App() {
  let clicked = []
  const [string, setString] = useState('');
  const [current, setCurrent] = useState(0); 
  const [best, setBest] = useState(0); 

  function increase(){
    setCurrent(current+1);
  }

  function updateBest(){
    if(current>best)
      setBest(current);
  }

  function reset(){
    setBest(0);
    setCurrent(0);
  }

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
        increase();
        setString('laksjdf')
        clicked.push(name)    
      }
    }
    alert(string);
  }
  return (
    <>
      <Score current={current} best={best}/>
      <Set action={checkClicked}/>
    </>
  );
}

export default App;
