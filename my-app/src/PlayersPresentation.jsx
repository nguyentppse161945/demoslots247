import React from 'react'
import { Players } from './shared/ListOfPlayers'
import { useState } from 'react'



const PlayersPresentation = () => {
const [player, setPlayer] = useState([]);

  return (
    <div className='grid grid-rows-3 grid-flow-col gap-3'>
        {Players.map((player)=>(
        <div className='column'>
        <div className='card'>
        <img src={player.img}/>
          <h3>{player.name}</h3>
          <p className='title'>{player.club}</p>
          <p className='bg-black text-white hover:bg-slate-700'><button onClick={() => {setPlayer(player)}}>
            <a href="#popup1" id='openPopUp'>Detail</a>
            </button></p>
        </div>
      </div>
     ))}
    <div id='popup1' className='overlay'>
      <div className='popup'>
        <img src={player.img} alt="" />
        <h2> {player.name} </h2>
        <a className='close' href="#">&times;</a>
        <div className='content'>
          {player.info}
        </div>
      </div>
    </div>
     </div>   
  )
}

export default PlayersPresentation