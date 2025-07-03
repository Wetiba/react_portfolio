import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
