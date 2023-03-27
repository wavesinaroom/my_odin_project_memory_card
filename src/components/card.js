export default function Card(props){
 
  function handleClick(){
    props.onClick(props.name);
  }

  return(
    <div onClick={handleClick}>
      <p>{props.name}</p>
      <p>{props.pic}</p>
    </div>
  );
}
