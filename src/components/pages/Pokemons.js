import React, {useState} from 'react'
import { UseFetch } from '../UseFetch'
import { Cards } from '../cards/Cards'
export const Pokemons = () => {
  const [url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon/')
  const state = UseFetch(url)
  const {loading,data}=state 
  loading? console.log('loading'):console.log(data.results)
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : <div>
        <Cards results={data.results}></Cards>
        <div className='container m-auto'>
          {data.results[0].name==="bulbasaur"
          ?(null):(<button onClick={()=>setUrl(data.previous)} className='m-2 btn btn-dark'>Previous</button>)
          } 
           <button onClick={()=>setUrl(data.next)} className='m-2 btn btn-dark'>Next</button>
        </div>
      </div>
      }
    </div>
  );
}
