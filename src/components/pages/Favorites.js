import React from 'react'
import { Link } from 'react-router-dom';
export const Items = () => {
  const bookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
  console.log()
  return (
    <div>
                  {
                bookmark.map(function(d, idx){
         return (
          <div className='card' style={{width:'14 rem'}} data-bs-toggle="modal" data-bs-target={`#id${d.id}`}>
          <div className='card-header' >
               <h5 className='card-title'>{d.id}</h5>
          </div>
          <div className='card-body' >
               <img src={d.sprites.front_default} alt='pokemon'/>
          </div>
          <div className='card-footer'>
              <p className='card-text text-capitalize'>{d.forms[0].name}</p>
          </div>
          <Link to={`/pokedetails/${d.id}`}>See Full Details</Link>
       </div>
         )
       })
            }
    </div>
  )
}
