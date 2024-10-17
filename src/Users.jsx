import { useEffect, useState } from "react"

export default function Users(){
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setUser(data))
        .catch(err =>console.log(err))
    },[])
    return(
        <div>
            <h3>User Data:{user.length}</h3>
        </div>
    )
}

// 1.declare to state to hold the data
// 2.useEffect to callback and dependency array
//3.use fetch to load data