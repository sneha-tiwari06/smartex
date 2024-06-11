import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay} from 'swiper/modules';

export default function UpcomingEvents() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get('http://localhost:8800/api/upcoming');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <div className="w-100 padding">
            <div className="container">
                <div className="heading">
                    <h2 className="h2" style={{ marginTop: "3rem" }}>Upcoming Events</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="newsContainer">
                            <div className="mynews1">
                                <Swiper
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    // pagination={{ clickable: true }}
                                    // navigation={true}
                                    modules={[Autoplay]}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        }
                            
                                    }}
                                >
                                    {posts.filter(post => post.active).map((post, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={`http://localhost:3000/upload/${post.image_url}`} alt={`Upcoming event ${index + 1}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
