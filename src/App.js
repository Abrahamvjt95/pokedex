import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { Navbar } from './components/navegate/Navbar';
import { Pokemons } from './components/pages/Pokemons';
import { Items } from './components/pages/Favorites';
import { Pokedetails } from './components/pages/Pokedetails';
function App() {
  return (
      <div className='App'>
        <Router>
         <Navbar/>
         <Routes>
          <Route path='/' exact element={<Pokemons/>}></Route>
          <Route path='/pokemons' exact element={<Pokemons/>}></Route>
          <Route path='/items' exact element={<Items/>}></Route>
          <Route path='/pokedetails/:id' element={<Pokedetails/>}></Route>
         </Routes >
       </Router>
      </div>

  );
}

export default App;
