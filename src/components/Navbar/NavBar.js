import './NavBar.css';
import { FaDollyFlatbed } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="navv">
            <h1 className="huno">WaterStore</h1>
            <div className="divnav">
                <button className="btn"><FaDollyFlatbed />5</button>
                <button className="btn">Phones</button>
                <button className="btn">Tablets</button>
                <button className="btn">Smarts</button>
            </div>
        </nav>
    )
}

export default NavBar