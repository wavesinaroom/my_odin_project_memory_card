import './App.css';
import Set from './components/set';
import Score from './components/score';
import {useEffect, useState} from 'react';

function App() {
  const [clicked, setClicked] = useState([]);
  const [current, setCurrent] = useState(0); 
  const [best, setBest] = useState(0); 

  function increase(){
    setCurrent(current+1);
  }

  function checkClicked(card){
    if(clicked.length===5){
      setClicked([card.name]);
      setBest(0);
      setCurrent(0);
    }else{
      if(clicked.find(click => click === card.name)){
        setClicked([card.name])
        setCurrent(0);
      }
      else{
        setClicked([...clicked,card.name])
        increase();
      }
    }
  }
  useEffect(()=>{
    if(current>best)
      setBest(current);
  },[current,best])

  return (
    <div className='main'>
      <h1>...Just try not to click on the same pic twice</h1>
      <Score current={current} best={best}/>
      <Set action={checkClicked}/>
    </div>
  );
}

export default App;
