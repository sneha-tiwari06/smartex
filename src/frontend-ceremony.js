import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default function Ceremony() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/ceremony'); // Update the URL as needed
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const activeEvents = events.filter(event => event.active);

  return (
    <div className="w-100 padding">
      <div className="container">
        <div className="heading">
          <h2 className="mb-0 h1">Ceremony</h2>
        </div>
        <div className="row no-gutters">
          {activeEvents.map((event, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="events-img">
                <a href={event.ceremony_link}>
                  <img alt={event.ceremony_name} src={`http://localhost:3000/upload/${event.image_url}`} />
                  <i className="fa fa-play"></i>
                </a>
                <p className="mb-0">{event.ceremony_name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="readmore">
          <Link to="/ceremony" className="white">More</Link>
        </div>
      </div>
    </div>
  );
}
