import { useState } from "react"

export default function Team(){
    const[player,setPlayer]=useState(11);
    const playerAdd=()=>{
       const newPlayer=player+1;
        setPlayer(newPlayer);
    }
    const playerRemove=()=>{
        const removePlayer =player-1;
        setPlayer(removePlayer);
    }
    const textStyle ={
        margin:'13px',
        padding:'12px',
        border:'2px solid yellow',
        borderRadius:'16px'
    }
    const styleBtn={
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'8px',
    }
    return( 
            <div style={textStyle}>
                <h3>Players:{player}</h3>
                <div style={styleBtn}>
                <button onClick={playerAdd}>Add</button>
                <button onClick={playerRemove}>Remove</button>
                </div>
            </div> 
    )
}