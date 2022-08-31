
import imageRirckMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";
import Characters from "./componets/Characters";


function App() {
  const [characters,setCharacters] = useState(null); //para pasar los datos


  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
     const characterApi = await api.json();

     setCharacters(characterApi.results) // para los datos

    //console.log(characterApi);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>

        {characters ? (
        <Characters characters = {characters} setCharacters={setCharacters} /> 
        ) : (
         <>
            <img src={imageRirckMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={reqApi} className='btn-search'>Buscar personaje</button>
         </>
        )}
         
        
      </header>
    </div>
  );
}

export default App;
