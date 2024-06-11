import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const StarSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/star'); // Update the URL as needed
        setSpeakers(response.data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <div className="w-100 padding bg-gray">
      <div className="container">
        <div className="heading">
          <h2 className="mb-0 h1">Star Speakers</h2>
        </div>
        <div className="speakersslide swiper pb-0">
          <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >
           {speakers.filter(speaker => speaker.active).map((speaker, index) => (
              <SwiperSlide key={index}>
                <Link to="/speakers">
                  <div className="speakers-main">
                    <div className="star-speakers-main">
                      <div className="star-speakers-img">
                        <img src={`http://localhost:3000/upload/${speaker.speaker_img}`} alt={speaker.name} />
                      </div>
                      <div className="star-speakers">
                        <h5>{speaker.speaker_name}</h5>
                        <p className="mb-0">{speaker.designation}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default StarSpeakers;
