import { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayAll_VG from './Components/DisplayAll_VG/DisplayAll_VG';
import './App.css';

function App() {

  const [videogames, setVideogames] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, [])

  async function getAllVideoGames(){
    let response = await axios.get('http://localhost:8080/all');
    setVideogames(response.data);
    console.log(response.data);
  }

  

  return (
    <div>
      <h3>Hello World</h3>
      <DisplayAll_VG videogames={videogames}/>
    </div>
  );
}

export default App;
