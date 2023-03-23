import {useState} from "react";

export default function Score(){
  const [current, setCurrent] = useState(0); 
  const [best, setBest] = useState(0); 

  function increase(){
    setCurrent(current+1);
  }

  return(
   <>
    <button onClick={increase}>Increase</button>
    <p>Current: {current}</p>
   </>
  ); 
}
