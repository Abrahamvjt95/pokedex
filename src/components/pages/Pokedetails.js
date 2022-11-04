import React , {useState} from 'react'
import { UseFetch } from '../UseFetch'
import { Cards } from '../cards/Cards'
import { Footer } from '../footer/Footer'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

export const Pokedetails = () => {
    const bookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    const { id } = useParams();
    const [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const state = UseFetch(url)
    const {loading,data}=state 
    loading? console.log('loading'):console.log(data)

    function saveBookmark(post) {
        console.log(bookmark);
        let repeated = false;
        bookmark.map((item) => {
          if (item.id === post.id) {
            repeated = true;
          }
          return null;
        });
        if (repeated) {
          alert("you have already added this to your bookmarks");
        } else {
          bookmark.push(post);
          localStorage.setItem("bookmark", JSON.stringify(bookmark));
          alert("you have added the item to your bookmarks");
        }
      }

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="card">
          <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item">Weight: {data.weight}</li>
          <li className="list-group-item">Height: {data.height}</li>
          <li className="list-group-item">Base Experience: {data.base_experience}</li>
            <li className="list-group-item">Habilities:
            {
                data.abilities.map(function(d, idx){
         return (<li key={idx}>{d.ability.name}</li>)
       })
            }
            </li>
            <li className="list-group-item">Stats:
            {
                data.stats.map(function(d, idx){
         return (<li key={idx}>{d.stat.name}:{d.base_stat}</li>)
       })
            }
            </li>
            
          </ul>
          <div className="card-body">
            <a href="#" className="card-link" onClick={() => saveBookmark(data)}>
              Add to favorites
            </a>
            <a href="/" className="card-link">
              Go back 
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
