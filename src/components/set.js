import {useState} from "react";
import uniqid from "uniqid";

export default function Set(props){

  const [cards,setCards] = useState([{name:`Joe`, pic:`1`},
                            {name:`Luke`, pic:`2`},
                            {name:`Bob`, pic:`3`},
                            {name:`James`,pic:`4`},
                            {name:`Lou`,pic:`5`}
  ]);

  function handleAction(name){
    props.action(name);
    shuffle();
  }

  function shuffle(){
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
      <div key={uniqid()} onClick={()=>{handleAction(cards[0])}}>
        <p>{cards[0].name}</p>
        <p>{cards[0].pic}</p>
      </div>
      <div key={uniqid()} onClick={()=>{handleAction(cards[1])}}>
        <p>{cards[1].name}</p>
        <p>{cards[1].pic}</p>
      </div>
      <div key={uniqid()} onClick={()=>{handleAction(cards[2])}}>
        <p>{cards[2].name}</p>
        <p>{cards[2].pic}</p>
      </div>
      <div key={uniqid()} onClick={()=>{handleAction(cards[3])}}>
        <p>{cards[3].name}</p>
        <p>{cards[3].pic}</p>
      </div>
      <div key={uniqid()} onClick={()=>{handleAction(cards[4])}}>
        <p>{cards[4].name}</p>
        <p>{cards[4].pic}</p>
      </div>
    </>
  );
  
}
