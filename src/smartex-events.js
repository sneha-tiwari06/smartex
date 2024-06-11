import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Nav2 from './nav2';
import Navbar from './navbar';
import Footer from './footer';

const EventDesc = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/event'); // Update the URL as needed
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const activePosts = posts.filter(post => post.active);

  return (
   
    <div>
         <Navbar />
    <Nav2 />
      <div className="w-100 insiadebanner padding">
        <div className="heading">
          <h1>Events</h1>
        </div>
      </div>
      <div className="w-100 float-left bg-inside padding">
        <div className="container">
          <div className="row no-gutters">
            {activePosts.map((post, index) => (
              <div key={index} className="col-md-3">
                <div className="events-img">
                  <img src={`http://localhost:3000/upload/${post.image_url}`} alt={post.title || `Event ${index + 1}`} />
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

export default EventDesc;
