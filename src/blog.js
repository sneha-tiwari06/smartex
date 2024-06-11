import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get('http://localhost:8800/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  const baseURL = 'http://localhost:3000/upload/';
  const showPosts = posts && posts
    .filter(post => post.active)
    .map((ele, index) => {
      const url = `${baseURL}${ele.img}`;
      return (
        <SwiperSlide key={index} className="blog-box-main swiper-slide">
          <div className="blog-box">
            <div className="blog-box-img w-100">
              <img src={url} alt={ele.title} />
            </div>
            <div className="blog-box-con">
              <small>{ele.date.slice(0, 10)} | Blog</small>
              <h5>{ele.title}</h5>
              <p></p>
              <div className="viewmore">
                <Link to={`/blog-details/${ele.id}`} className="button">
                  <span>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });

  return (
    <div className="w-100 padding bg-gray">
      <div className="container">
        <div className="heading">
          <h2 className="h2">Blog</h2>
        </div>
        <div className="newsContainer dinone">
          <div className="swiper-container">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                clickable: true,
              }}
              modules={[Autoplay, Navigation]}
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
              {showPosts}
            </Swiper>
            {/* <div className="swiper-button-next swiper-button-bl text-white" style={{ color: "#fff" }}></div>
            <div className="swiper-button-prev swiper-button-bl text-white" style={{ color: "#fff" }}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
