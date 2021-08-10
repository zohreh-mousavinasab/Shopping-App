import {useState} from "react"

const HookArray = () => {
    const [item,setItem]= useState([])
    
   const randHandler= () => {
    setItem([...item,{ id:item.length, number:Math.floor(Math.random()*10),

    }])
   };
    return (
     <div>
     <button onClick={randHandler}>addItem</button>
     {item.map((item)=>{
         return<li key={item.id}>{item.number}</li>
     
})}
     </div>
     );
};
 
export default HookArray;