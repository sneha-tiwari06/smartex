
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
       
        <div className="header-top">
        
            <div className="row align-items-center">
                <div className="col-md-6 col-sm-6 col-12 d-flex align-items-center">
                    <ul className="list-inline topmenu">
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/our-blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/visitor-registration">Visitor Registration</Link></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="top_social">
                        <li><a href="https://www.facebook.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        {/* <li><a href="https://twitter.com/smartexevents" target="_blank"><i className="fa-brands fa-square-x-twitter text-white"></i></a></li> */}
                        <li><a href="https://www.youtube.com/@smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                        {/* <li><a href="https://smartexevents.quora.com" target="_blank"><i className="fa-brands fa-quora"></i></a></li> */}
                        {/* <li><a href="https://in.pinterest.com/smartexevents" target="_blank"><i className="fa-brands fa-pinterest"></i></a></li> */}
                        {/* <li><a href="https://medium.com/@smartexevents" target="_blank"><i className="fa-solid fa-m"></i></a></li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
