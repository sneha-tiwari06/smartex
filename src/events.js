import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';
const Events = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/event'); 
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const activePosts = posts.filter(post => post.active);

  return (
    <div className="w-100 padding bg-gray">
      <div className="container">
        <div className="heading">
          <h2 className="mb-0 h1">Smartex Events</h2>
        </div>
        <div className="smartexevents swiper pb-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {activePosts.map((post, index) => (
              <SwiperSlide key={index}>
                <Link to="/smartex-events">
                  <div className="events-img">
                    <img src={`http://localhost:3000/upload/${post.image_url}`} alt={post.title || `Event ${index + 1}`} />
                  
                    {/* <p className="mb-0">{post.description || 'Event Description'}</p> */}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
         
              <div className="readmore">
          <Link to="/smartex-events" className="black">More</Link>
        </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default Events;
