import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import SearchResultsDisplay from './Components/SearchResultsDisplay/SearchResultsDisplay';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SalesCharts from './Components/SalesCharts/SalesCharts';
import TopFiveChart from './Components/TopFiveChart/TopFiveChart';
import PlatformChart from './Components/PlatformChart/PlatformChart'

function App() {

  const [videogames, setVideogames] = useState([]);
  const [videogameID, setVideogameId] = useState([]);
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
  //   setVideogameId(response.data);
  //   console.log(response.data);
  // }

  return (
    
    <div>
      <Navbar videogames={videogames} setFilteredVideogames={setFilteredVideogames}/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <SearchResultsDisplay filteredVideogames={filteredVideogames} />
              </div>
            </div>
            <div className='col-md-6' style={{padding: '3em', }}>
              {/* <h1>Analytics</h1> */}
              <PlatformChart videogames={videogames}/>
              <SalesCharts videogames={videogames}/>
              <TopFiveChart videogames={videogames}/>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
