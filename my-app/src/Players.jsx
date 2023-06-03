import React from 'react'
import {Players} from './shared/ListOfPlayers';
const Player = () => {
  return (
    <div className='container grid grid-cols-2 gap-3 place-content-center'>
        {Players.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img src={player.img}/>
             <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <p className='bg-black hover:bg-black[1/3]'><button>Detail</button></p>
           </div>
         </div>
        ))}
    </div>


  )
}

export default Player
