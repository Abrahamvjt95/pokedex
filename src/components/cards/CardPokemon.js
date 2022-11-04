import React from 'react'
import { UseFetch } from '../UseFetch'
import { Modal } from './Modal'
import { Link } from 'react-router-dom';
export const CardPokemon = ({url}) => {

    const state = UseFetch(url)
    const {loading,data}=state 

  return (
    <div>
        {
            loading?
            <h1>Loading...</h1>
            :
            <div className='card' style={{width:'14 rem'}} data-bs-toggle="modal" data-bs-target={`#id${data.id}`}>
               <div className='card-header' >
                    <h5 className='card-title'>{data.id}</h5>
               </div>
               <div className='card-body' >
                    <img src={data.sprites.front_default} alt='pokemon'/>
               </div>
               <div className='card-footer'>
                   <p className='card-text text-capitalize'>{data.forms[0].name}</p>
               </div>
               <Link to={`/pokedetails/${data.id}`}>See Full Details</Link>
            </div>
        }
    </div>
  )
}
