import "./Navbar.css"

const Navbar = () => {
    return ( 
        <div className="navBar">
            <ul>
                <li className="brand">
                    <div style={{ textDecoration: "none", color: "white" }}>
                        <b>Game Data</b>
                    </div>
                </li>
            </ul>
        </div>
     );
}
 
export default Navbar;