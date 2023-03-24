import {useState} from "react";
import uniqid from "uniqid";
import Card from "./card";

export default function Set(props){
  const[cards,setCards] = useState([<Card key={uniqid()} name="John" pic="1"/>,
                                    <Card key={uniqid()} name="Al" pic="2"/>,
                                    <Card key={uniqid()} name="Paul" pic="3"/>,
                                    <Card key={uniqid()} name="James" pic="4"/>,
                                    <Card key={uniqid()} name="Lou" pic="5"/>,]);

  function shuffle(){
    props.action('laksdjf');
    const shuffled = Array(5);
    let random;
    cards.forEach(card=>{
      while(true){
        random = Math.floor(Math.random()*5);
        if(!shuffled[random]){
          shuffled[random] = card;
          break;
        }
      }
    });
    setCards(shuffled);
  }
  return(
    <>
      <button onClick={()=>shuffle()}>Shuffle</button>
      {cards}
    </>
  );
  
}
