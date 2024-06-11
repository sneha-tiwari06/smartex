import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";

export default function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/partners'); 
        setPartners(response.data); 
      } catch (error) {
        console.error('Error fetching partners:', error);
      }
    };

    fetchPartners();
  }, []);

  const activePartners = partners.filter(partner => partner.active);

  return (
    <div>
      <Navbar />
      <Nav2 />
      <div className="w-100 padding">
        <div className="container">
          <div className="heading">
            <h1>Our Partners</h1>
          </div>
          <div className="row no-gutters">
            {activePartners.map((partner, index) => (
              <div className="col-md-2" key={index}>
                <div className="events-img">
                  <img src={`http://localhost:3000/upload/${partner.image_url}`} alt={`Partner ${index + 1}`} />
                </div>
                <div className="alt-tag">
                  <p>{partner.alt_tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
