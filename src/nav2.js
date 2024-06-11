
import { Link } from "react-router-dom";

export default function Nav2() {
    return (
        <div className="header">
            <div className="d-flex justify-content-between">
                <div className="logo">
                    <Link to="/"> <img className="logo" src="https://ecis.in/smartex-react/assets/logo.png" alt="Smartex" /></Link>
                </div>
                <div className="menu-section">
                    <nav className="navi d-none d-lg-flex align-items-center">
                        <ul className="list-inline menu d-flex justify-content-center align-items-center">
                            <li><Link to="/winnersgallery">Winners Gallery</Link></li>
                            <li><a href="javascrip:;">City Talks</a></li>
                            <li><Link to="/sponsership">Sponsorships</Link></li>
                        </ul>
                    </nav>
                </div>
                <button className="menuBtn d-flex d-lg-none">
                    <span id="menuLine1"></span>
                    <span id="menuLine2"></span>
                    <span id="menuLine3"></span>
                </button>
            </div>
        </div>
    );
}
