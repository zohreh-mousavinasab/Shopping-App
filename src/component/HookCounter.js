
import {useState} from 'react'

const HookCounter = () => {
    const [count, setCount]=useState(0);

    const oneclickhandler=()=>{
        setCount((prevcount) => prevcount+1);
    };
    const twoclickhandler=()=>{
        setCount((prevcount)=> prevcount+2);
    };
    const fiveclickhandler=()=>{
        setCount((prevcount)=>prevcount+5);
    };
    
    return (
      <div>
         <h2> count - {count} </h2> 
         <button onClick = {oneclickhandler}> add one </button>
         <button onClick = {twoclickhandler}> add two </button>
         <button onClick = {fiveclickhandler}> add five </button>
      </div>
      );
};
 
export default HookCounter;