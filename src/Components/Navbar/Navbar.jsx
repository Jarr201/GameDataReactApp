import App from "../../App";
import SearchBar from "../SearchBar/SearchBar";
import '../SearchBar/SearchBar.css';
import "./Navbar.css";
import getSearchedVideoGame from "../../App";

const Navbar = () => {
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