import {useState} from "react";

export default function Score(){
  const [current, setCurrent] = useState(0); 
  const [best, setBest] = useState(0); 

  function increase(){
    setCurrent(current+1);
  }

  function updateBest(){
    if(current>best)
      setBest(current);
  }

  return(
   <>
    <button onClick={increase}>Increase</button>
    <button onClick={updateBest}>Update</button>
    <p>Current: {current}</p>
    <p>Best: {best}</p>
   </>
  ); 
}
