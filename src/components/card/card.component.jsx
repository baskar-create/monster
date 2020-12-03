import React from "react";
import './card.styles.css';
export const Card = (props)=>{
    return  <div className='card-container'>
            <img alt="monster" src={`https://robohash.org/${props.id}?set=set2`}/>
            <h2>{props.monsters}</h2>
            <p>{props.mail}</p>
       </div>
}