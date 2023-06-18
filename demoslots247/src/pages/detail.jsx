import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Players } from '../shared/ListOfPlayers'; 
import { useState } from 'react';
import { Icon } from 'react-materialize'
import ModalCase from '../components/ModalCase';




const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);


    const userName = useParams();
    const player = Players.find(obj => {
      return obj.id === userName.id;
    });
    if (!player) {
      return <div>No player found with the specified ID.</div>;
    }
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
          <Link onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
                  <Icon>ondemand_video</Icon>
                  {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
          </Link>

    	</div>
  </div>
</div>

  )
}

export default Detail
