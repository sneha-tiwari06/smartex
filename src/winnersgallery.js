import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Nav2 from './nav2';
import Footer from './footer';

const WinnersGallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:8800/api/winners'); // Replace with your actual API endpoint
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  const showPosts = posts
    .filter(post => post.active)
    .map((ele, index) => {
      const baseUrl = 'http://localhost:3000/upload/';
      const url = `${baseUrl}${ele.img}`;

      return (
        <div key={index} className="col-md-3">
          <div className="events-img">
            <a href={url} data-magnify="gal" data-caption="Winner Gallery" className="h-100">
              <img src={url} alt={ele.alt_tag} />
            </a>
          </div>
        </div>
      );
    });

  return (
    <div className="winners">
      <Navbar />
      <Nav2 />
      <div className="w-100 insiadebanner padding">
        <div className="heading">
          <h1 data-target="#cookiesmodal" data-toggle="modal">Winners Gallery</h1>
        </div>
      </div>
      <div className="w-100 float-left bg-inside padding">
        <div className="container">
          <div className="row no-gutters">
            {showPosts}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WinnersGallery;
