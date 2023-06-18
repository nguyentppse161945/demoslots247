import React from 'react'
import { useParams } from 'react-router-dom'
import { Players }from '../shared/ListOfPlayers'


const Detail = () => {

    const userName = useParams();
    const player = Players.find(obj => {
      return obj.id === userName.id;
    });
     let cost = player.cost.toLocaleString();
  

  return (
    <div className='container mx-auto'>
     <div className='product-card w-full'>
    	<div className='badge'>{player.name}</div>
    	<div className='product-tumb'>
    		<img src={`../${player.img}`} alt='' className='w-full justify-self-auto'/>
    	</div>
    	<div className='product-details'>
        	<h4>{player.club}</h4>
      		<div className='product-price'>Market value: € {cost}</div>
      		<p>{player.info}</p>
      		<div className='product-bottom-details'></div>
    	</div>
  </div>
</div>

  )
}

export default Detail