import React from "react";
import './search.styles.css'
export const Search=({placeholder,handler})=>{
    return (
   
  <input className='search' type="search" onChange={handler} placeholder={placeholder}></input>
  
    );
}