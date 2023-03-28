import {useState} from "react";
import uniqid from "uniqid";

export default function Set(props){

  const [cards,setCards] = useState([{name:`1`, pic:`https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
                            {name:`2`, pic:`https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
                            {name:`3`, pic:`https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
                            {name:`4`,pic:`https://images.pexels.com/photos/1171170/pexels-photo-1171170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`},
                            {name:`5`,pic:`https://images.pexels.com/photos/4838747/pexels-photo-4838747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
  ]);

  function handleAction(name){
    props.action(name);
    shuffle();
  }

  function shuffle(){
    const shuffled = Array(cards.length);
    let random;
    cards.forEach(card=>{
      while(true){
        random = Math.floor(Math.random()*cards.length);
        if(!shuffled[random]){
          shuffled[random] = card;
          break;
        }
      }
    });
    setCards(shuffled);
  }
  return(
    <div className="set">
      <img alt="0" src={cards[0].pic} key={uniqid()} onClick={()=>{handleAction(cards[0])}}/>
      <img alt="1" src={cards[1].pic} key={uniqid()} onClick={()=>{handleAction(cards[1])}}/>
      <img alt="2" src={cards[2].pic} key={uniqid()} onClick={()=>{handleAction(cards[2])}}/>
      <img alt="3" src={cards[3].pic} key={uniqid()} onClick={()=>{handleAction(cards[3])}}/>
      <img alt="4" src={cards[4].pic} key={uniqid()} onClick={()=>{handleAction(cards[4])}}/>
    </div>
  );
  
}
