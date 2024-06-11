import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";
import DOMPurify from 'dompurify';

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/star'); 
        setSpeakers(response.data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      }
    };

    fetchSpeakers();
  }, []);
  const activePosts = speakers.filter(post => post.active);
  return (
    <div className="star-speakers">
      <Navbar />
      <Nav2 />
      <div className="w-100 insiadebanner padding">
        <div className="heading">
          <h1>Star Speakers</h1>
        </div>
      </div>
      <div className="w-100 float-left bg-inside padding">
        <div className="container">
          <div className="product-wrapper">
            {activePosts.map((speaker, index) => (
              <div
                key={index}
                className={`form-row align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="col-xl-3 col-md-4 product-box">
                  <section>
                    <div className="img-fluid">
                      <img src={`http://localhost:3000/upload/${speaker.speaker_img}`} alt={speaker.name} />
                    </div>
                  </section>
                </div>
                <div className="col-xl-9 col-md-8 product-box">
                  <section>
                    <h4>
                      {speaker.speaker_name}
                      <br />
                      <small>{speaker.designation}</small>
                    </h4>
                    <p  style={{fontSize: "16px"}}>{DOMPurify.sanitize(speaker.description, { ALLOWED_TAGS: [] })}</p>
                  </section>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;
