import { useState, useEffect } from 'react';
import axios from 'axios'
// import DisplayAllVG from './Components/DisplayAllVG/DisplayAllVG';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import SearchResultsDisplay from './Components/SearchResultsDisplay/SearchResultsDisplay';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SalesCharts from './Components/SalesCharts/SalesCharts';

function App() {

  const [videogames, setVideogames] = useState([]);
  const [filteredVideogames, setFilteredVideogames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
    // getById();
  }, [])

  async function getAllVideoGames(){
    try{
    let response = await axios.get('http://localhost:8080/all');
    setVideogames(response.data);
    } catch(ex){
    console.log(`ERROR in getAllVideoGames EXCEPTION: ${ex}`);
    }
  }

  // async function getById(){
  //   let response = await axios.get('http://localhost:8080/getById/125');
  //   setVideogames(response.data);
  //   console.log(response.data);
  // }

  // function getSearchedVideoGame(searchterm){
  //   let response = videogames.filter(function(e){
  //     if (e.name.includes(searchterm))
  //     {return true}
  //     else
  //     {return false}
  //   });
  //   setVideogames(response)
  //   console.log(response)
  // }
  

  return (
    <div>
      <Navbar videogames={videogames} setFilteredVideogames={setFilteredVideogames}/>
      {/* <DisplayAllVG videogames={videogames}/> */}
      {/* <SearchBar submittedSearchTerm={getSearchedVideoGame} /> */}
      <SearchResultsDisplay filteredVideogames={filteredVideogames} />
      <SalesCharts videogames={videogames}/>
      <Footer />
    </div>
  );
}

export default App;
