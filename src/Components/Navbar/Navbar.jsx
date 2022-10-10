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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">    
            <div class="container-fluid">
                <div className="navBar">
                    <ul>
                        <li className="brand">
                            <div style={{ textDecoration: "none", color: "white" }}>
                                <b>Games</b>
                                <b style={{color: "#FFBF46"}}> R </b>
                                <b>Us</b>
                                <SearchBar submittedSearchTerm={getSearchedVideoGame} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;