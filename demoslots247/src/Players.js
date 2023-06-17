import React, { Component, useState } from "react";
import { Players } from "../src/shared/ListOfPlayers";

export default function Players() {
    const [player, setPlayer] = useState({});

  return (
    <div className='container'>
      {Players.map((player) => (
        <div className='column' key={player.id}>
          <div className='card'>
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
            <button onClick={() => setPlayer(player)}>
<a href='#popup1' id='openPopUp'>Detail</a>
</button>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
        <img src={player.img} />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &time;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
