import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css';

export default function Card({gameEnd, player, onPlay, index}) {
    let icon=<Icon/>
    if(player =='X'){
        icon=<Icon name ="cross" />
    }else if(player =='O'){
        icon=<Icon name ="circle"/>
    } 

  return (
    <div className='card' onClick={ ()=>!gameEnd && player=="" && onPlay(index) }>
        {icon}
    </div>
  )
}
