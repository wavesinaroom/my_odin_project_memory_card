import './App.css';
import Set from './components/set';
import Score from './components/score';
import {useState} from 'react';

function App() {
  const [clicked, setClicked] = useState(Array(5));

  function checkClicked(id){
    if(clicked[4]){
      //Reset clickec - current score - best score
    }else{
      if(clicked.find(click => click === id)){
        //Reset current score
      }
      else{
        //Update clicked - Check best - increase current
      }
    }

  }
  return (
    <>
      <Score/>
      <Set/>
    </>
  );
}

export default App;
