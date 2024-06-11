import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-area overflow-hidden float-left w-100">
            <div className="container">
                <div className="midFooter w-100 padding pb-0">
                    <div className="row">
                        <div className="col-lg-6 footerBox footerAbout">
                            <a href="index.php"> <img src="https://ecis.in/smartex-react/assets/logo.png" alt="Smartex" className="w-50" /></a>
                            <div className="section">
                                <p className="p-0" style={{ textAlign:"left"}}>SMARTEX is a congregation of smart minds and products endeavored as a symposium & expo, focusing on smart design, emerging technologies, and innovation in the realm of architecture & interior design.</p>
                                <ul className="list-inline socials">
                                    <li><a href="https://www.facebook.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="https://twitter.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-square-x-twitter text-white"></i></a></li>
                                    <li><a href="https://www.youtube.com/@smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="https://smartexevents.quora.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-quora"></i></a></li>
                                    <li><a href="https://in.pinterest.com/smartexevents" target="_blank" rel="noreferrer"><i className="fa-brands fa-pinterest"></i></a></li>
                                    <li><a href="https://medium.com/@smartexevents" target="_blank" rel="noreferrer"><i className="fa-solid fa-m"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 footerBox footerContact" style={{ textAlign:"left"}}>
                            <h5 >RESOURCES</h5>
                            <ul className="list-inline">
                                <li><a href="about.php">About US</a></li>
                                <li><a href="testimonials.php">Testimonials</a></li>
                                <li><a href="faqs.php">General FAQs</a></li>
                                <li><a href="privacy-policy.php">Privacy Policy</a></li>
                                <li><a href="terms-conditions.php">Terms & Conditions</a></li>
                                {/* <li><a href="visitor-registration.php">Visitor Registration</a></li> */}
                            </ul>
                            {/* <h5>SITEMAP</h5> */}
                        </div>
                        <div className="col-lg-3 col-6 footerBox footerContact" style={{ textAlign:"left"}}>
                            <h5>ADDRESS</h5>
                            <ul className="list-inline">
                                <p className="p-0">No-204, RS Tower, B-1267, Near Metro Pillar No, 156, New Ashok Nagar, Delhi, 110096</p>
                            </ul>
                            <h5 className="text-light">CONTACT INFO.<br /><a className="text-light" href="tel:+919868206028">98682 06028</a><br /><a className="text-light" href="tel:+918800620720">88006 20720</a><br /> <a className="text-light" href="mailto:smartexevents@gmail.com">smartexevents@gmail.com</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container border-top">
                <div className="bottom w-100">
                    <ul className="list-inline">
                        <li>Copyright © 2024 Smartex</li>
                    </ul>
                    <p>An initiative by Building Material Reporter</p>
                </div>
            </div>
        </footer>
    );
}
