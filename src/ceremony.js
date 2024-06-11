import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";


export default function CeremonyMore() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/ceremony'); 
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const activeEvents = events.filter(event => event.active);
  return (
    <div>
           <Navbar />
            <Nav2 />
    <div className="w-100 padding">
      
      <div className="container">
        <div className="heading">
          <h2 className="mb-0 h1">Ceremony</h2>
        </div>
        <div className="row no-gutters">
        {activeEvents.map((event, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="events-img">
                <a href={event.ceremony_link} target="_blank" rel="noopener noreferrer">
                  <img alt={event.ceremony_name} src={`http://localhost:3000/upload/${event.image_url}`} />
                  <i className="fa fa-play"></i>
                </a>
                <p className="mb-0">{event.ceremony_name}</p>
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
