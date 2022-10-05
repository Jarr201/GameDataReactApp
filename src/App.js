import { useState, useEffect } from 'react';
import axios from 'axios'
// import DisplayAllVG from './Components/DisplayAllVG/DisplayAllVG';
import './App.css';


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
  

  return (
    <div>
      <h3>Hello World</h3>
      {/* <DisplayAllVG videogames={videogames}/> */}
    </div>
  );
}

export default App;
