import {useState} from "react";
import Card from "./card";

export default function Set(){
  const[cards,setCards] = useState([<Card name="John" pic="1"/>,<Card name="Al" pic="2"/>,<Card name="Paul" pic="3"/>,<Card name="James" pic="4"/>,<Card name="Lou" pic="5"/>,]);

  return(
    <>
      {cards}
    </>
  );
  
}
