import { useState, useEffect } from 'react';
import axios from 'axios'
// import DisplayAllVG from './Components/DisplayAllVG/DisplayAllVG';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import SearchResultsDisplay from './Components/SearchResultsDisplay/SearchResultsDisplay';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
    // getById();
  }, [])

  async function getAllVideoGames(){
    let response = await axios.get('http://localhost:8080/all');
    setVideogames(response.data);
    console.log(response.data);
  }

  // async function getById(){
  //   let response = await axios.get('http://localhost:8080/getById/125');
  //   setVideogames(response.data);
  //   console.log(response.data);
  // }

  function getSearchedVideoGame(searchterm){
    let response = videogames.filter(function(e){
      if (e.name.includes(searchterm))
      {return true}
      else
      {return false}
    });
    setVideogames(response)
    console.log(response)
  }
  

  return (
    <div>
      <Navbar />
      <h3>Hello World</h3>
      {/* <DisplayAllVG videogames={videogames}/> */}
      <SearchBar submittedSearchTerm={getSearchedVideoGame} />
      <SearchResultsDisplay videogames={videogames}/>
    </div>
  );
}

export default App;
