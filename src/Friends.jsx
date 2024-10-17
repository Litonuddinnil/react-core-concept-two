import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './friend';
export default function Friends(){

    const [friends,friendUser]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res =>res.json())
        .then(data =>friendUser(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends:{friends.length}</h3>
            {
                friends.map(friend=><Friend friend={friend}></Friend>)
            }
        </div>
    )
}