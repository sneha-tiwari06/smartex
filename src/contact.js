import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";

export default function Contact() {
    return (
        <div classNameName="AboutUs">
            <Navbar />
            <Nav2 />
            <div className="w-100 insiadebanner padding">
            <div className="heading">
                <h1>Contact us</h1>
            </div>
        </div>
        <div className="w-100 bg-inside padding ">
        <div className="container">
            <div className="address">
                <div className="row gap-row align-items-center">
                    <div className="col-sm-6 addressBox">
                        <div className="inner">
                            <div className="heading  text-left"><h4 className="mb-0">Office Address</h4></div>
                            <p className="mb-2 text-orange"><strong>No-204, RS Tower, B-1267, Near Metro Pillar</strong></p>
                            
                        </div>
                        <div className="inner">
                            <p className="mb-2 text-orange"><strong>No, 156, New Ashok Nagar, Delhi, 110096</strong></p>
                            <ul className="list-inline">
                                <li><a href="tel:+919868206028"><i className="fa fa-phone"></i><span>+91-98682 06028</span></a></li>
                                <li><a href="tel:+918800620720"><i className="fa fa-phone"></i><span>+91-88006 20720</span></a></li>
                                <li><a href="mailto:smartexevents@gmail.com"><i className="fa fa-envelope"></i>smartexevents@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 addressBox">
                        <form action="" id="modal_form" method="post" onsubmit="return modalform();">
                            <div className="form contactform no-gutters">
                                <div className="col form-group">
                                    <input type="text" className="form-control" id="enq_name" name="enq_name" placeholder="Name*" />
                                </div>
                                <div className="col form-group">
                                    <input type="email" className="form-control" name="enq_email" id="enq_email" placeholder="Email*" />
                                </div>
                                <div className="col form-group">
                                    <input type="tel" className="form-control" name="enq_mobile" id="enq_mobile" placeholder="Mobile*" />
                                </div>
                                <div className="col formFooter readmore">
                                    <input type="hidden" name="enquiry" value="active" />
                                    <button type="submit" className="btn mx-auto white" id="enqbtn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-100 float-left pt-0 padding mapContainer">
    <div className="container-fluid">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112128.69137082773!2d77.11757191357634!3d28.56911393224107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x390ce48bd6c39df7%3A0xeccf18f3748e18b5!2sH8Q3%2BJJC%20R%20S%20Tower%2C%20Block%20B%2C%20New%20Ashok%20Nagar%2C%20Noida%2C%20Delhi%20110096!3m2!1d28.5890617!2d77.30401069999999!5e0!3m2!1sen!2sin!4v1682107861281!5m2!1sen!2sin"
    style={{ border: "0", width: "100%" }}
    title="Google Map"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>

            <Footer />
        </div>
    );
} 