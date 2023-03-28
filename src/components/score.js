export default function Score(props){

  return(
   <div className="score">
    <p>Current: {props.current}</p>
    <p>Best: {props.best}</p>
   </div>
  ); 
}
