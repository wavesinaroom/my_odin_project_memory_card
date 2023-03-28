import './App.css';
import Set from './components/set';
import Score from './components/score';
import {useState} from 'react';

function App() {
  const [clicked, setClicked] = useState([]);
  const [current, setCurrent] = useState(0); 
  const [best, setBest] = useState(0); 

  function increase(){
    setCurrent(current+1);
  }

  function updateBest(){
    if(current>best)
      setBest(current);
  }


  function checkClicked(card){
    if(clicked.length===4){
      setClicked([card.name]);
      setBest(0);
      setCurrent(0);
      //Reset clicked - current score - best score
    }else{
      if(clicked.find(click => click === card.name)){
        //Reset current score
        setCurrent(0);
      }
      else{
        //Update clicked - Check best - increase current
        setClicked([...clicked,card.name])
        increase();
        updateBest();
      }
    }
    console.log(clicked);
  }
  return (
    <>
      <Score current={current} best={best}/>
      <Set action={checkClicked}/>
    </>
  );
}

export default App;
