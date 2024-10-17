import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
    const handleAdd=()=>{
        const newCount =count+1;
        setCount(newCount)
    }
    const handleReduce=()=>{
        const deleteCount =count-1;
        setCount(deleteCount)
    }
    return(
        <div style={{margin:'10px',padding:'7px',border:'2px solid tomato'}}>
            <h1>Counter:{count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}