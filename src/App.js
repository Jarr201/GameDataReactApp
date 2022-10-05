import { useState, useEffect } from 'react';
import axios from 'axios'
// import DisplayAllVG from './Components/DisplayAllVG/DisplayAllVG';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
<<<<<<< HEAD
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
=======

>>>>>>> 8de451adda27beb7a31d2ff79f33f0402d00bd63

function App() {

  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
    getById();
  }, [])

  async function getAllVideoGames(){
    let response = await axios.get('http://localhost:8080/all');
    setVideogames(response.data);
    console.log(response.data);
  }

  async function getById(){
    let response = await axios.get('http://localhost:8080/getById/125');
    setVideogames(response.data);
    console.log(response.data);
  }

  function getSearchedVideoGame(searchterm){
    let response = videogames.filter(function(e){
      if (e.name.includes(searchterm))
      {return true}
      else
      {return false}
    });
    setVideogames(response)
  }
  

  return (
    <div>
      <Navbar />
      <h3>Hello World</h3>
      {/* <DisplayAllVG videogames={videogames}/> */}
      <SearchBar submittedSearchTerm={getSearchedVideoGame} />
    </div>
  );
}

export default App;
