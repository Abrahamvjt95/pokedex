import React from 'react'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Pokedex</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/pokemons'>Pokemons</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to='/items'>Favorites</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
