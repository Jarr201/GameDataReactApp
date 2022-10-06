import App from "../../App";
import SearchBar from "../SearchBar/SearchBar";
import '../SearchBar/SearchBar.css';
import "./Navbar.css";
import getSearchedVideoGame from "../../App";
import {useState} from "react";


const Navbar = (props) => {   
    function getSearchedVideoGame(searchterm){
        let response = props.videogames.filter(function(e){
          if (e.name.includes(searchterm))
          {return true}
          else
          {return false}
        });
        props.setFilteredVideogames(response)
        console.log(response)
      }
      
    return ( 
        <div className="navBar">
            <ul>
                <li className="brand">
                    <div style={{ textDecoration: "none", color: "white" }}>
                        <b>Game Data</b>
                        <SearchBar submittedSearchTerm={getSearchedVideoGame} />
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;