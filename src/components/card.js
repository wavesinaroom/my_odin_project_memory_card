export default function Card(props){
 

  return(
    <div onClick={()=>alert(`Clicked on ${props.name} card`)}>
      <p>{props.name}</p>
      <p>{props.pic}</p>
    </div>
  );
}
