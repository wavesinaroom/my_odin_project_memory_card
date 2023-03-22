import {useState} from "react";

export default function Score(){
 const [current, setCurrent] = useState(0); 
 const [best, setBest] = useState(0); 
 return(
  <>
   <p>It renders!</p>
  </>
 ); 
}
