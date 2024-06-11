import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";

export default function Sponsership() {
    return (
        <div className="sponserships">
            <Navbar alt="sponserships" />
            <Nav2 alt="sponserships" />
            <div className="w-100 insiadebanner padding">
                <div className="heading">
                    <h1 >Sponsorships</h1>
                </div>
            </div>
            <div className="w-100 padding bg-inside">
                <div className="container">
                    <div className="aboutus" style={{ textAlign:"left", fontSize:"16px"}}>
                        <p>Sponsorship opportunities for our architectural event provide a unique platform for businesses to align their brand with innovation, creativity, and influential thought leadership in the dynamic realm of architecture. By becoming a sponsor, companies gain exclusive visibility among a targeted audience comprising architects, designers, consultants, and industry professionals. These opportunities not only offer direct engagement with key decision-makers but also provide a chance to showcase new products, services, and initiatives to a discerning and influential audience.</p>
                        <p>From prominent logo placement to curated networking sessions, our sponsorship packages offer a tailored approach, ensuring that sponsors receive maximum exposure and recognition for their support while contributing to the success and vibrancy of the architectural community. Don't miss the chance to be a key supporter of this dynamic event and position your brand at the forefront of the architectural conversation.</p>
                        <p>Join us as a sponsor and be at the forefront of shaping the future of architecture.</p>
                        <h5 className="red" style={{ textAlign:"left", fontSize:"16px"}}>Sponsorship Categories</h5>
                        <ul className="list mb-3 ml-3" style={{ textAlign:"left", fontSize:"16px"}}>
                            <li>Title Sponsor</li>
                            <li>Powered By Sponsor</li>
                            <li>Co-powered By</li>
                            <li>Gold Sponsor</li>
                            <li>Customised Partnerships</li>
                        </ul>

                        <h5 className="red" style={{ textAlign:"left", fontSize:"16px"}}>Benefits of Association</h5>
                        <ul className="list mb-3 ml-3" style={{ textAlign:"left", fontSize:"16px"}}>
                            <li>Showcase Your Innovations/Smart Products</li>
                            <li>Face-To-Face Interactions with Influencers</li>
                            <li>Enhance Your Penetration in Tier2/Tier3 Cities</li>
                            <li>Tap The Untapped Markets</li>
                        </ul>
                        <h5 className="red" style={{ textAlign:"left", fontSize:"16px"}}>Key Deliverables</h5>

                        <ul className="list mb-3 ml-3" style={{ textAlign:"left", fontSize:"16px"}}>
                            <li>Display space inside the conference room</li>
                            <li>ONE to ONE Meeting with Architects</li>
                            <li>Presenting Awards on Stage</li>
                            <li>Presentation Slot</li>
                            <li>Award by Smartex to Your Brand</li>
                            <li>Brand Visibility with all the Marketing Collaterals</li>
                            <li>Logo on the Conference Lanyard</li>
                            <li>Promotion through India’s fastest growing media platform which will boost your branding and visibility all over the globe.</li>
                        </ul>
                    </div>

                    <div className="w-100 bg-inside padding ">
                        <div className="container">
                            <div className="address">
                                <div className="heading">
                                    <h4 className="text-uppercase text-dark text-left">sponsorship opportunities</h4>
                                </div>
                                <div className="addressBox">
                                    <span className="status is-invalid"></span>
                                    <form id="smartexform" method="post">
                                        <div className="form form-row contactform no-gutters">
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Last Name*" />
                                            </div>

                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="mobile" id="mobile" placeholder="Mobile*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="companyname" id="companyname" placeholder="Company Name*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="country" id="country" placeholder="Country*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="city" id="city" placeholder="City*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <input type="text" className="form-control" name="postcode" id="postcode" placeholder="Post Code*" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <textarea name="youraddress" id="youraddress" className="form-control" placeholder="Your Address"></textarea>
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="col formFooter readmore">
                                                <input type="hidden" name="sponser" value="active" />
                                                <button type="submit" className="btn mx-auto white" id="bsubmit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
