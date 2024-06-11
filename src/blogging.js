import React from 'react';
import Slider from 'react-slick';
// import './blogging.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Blogs() {
    const settings = {
      
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className="blogs pt-4">
            <div className="heading">
                <h3 className="mb-0 h1" style={{color: "white"}}>Blogs</h3>
            </div>
            <Slider {...settings}>
                
                <div className='blogs-img'>
                    <img src='../assets/blogs/1 (1).jpg' alt='blogs' />
                     
                </div>
               
                <div className='blogs-img'>
                    <img src='../assets/blogs/1 (2).jpg' alt='blogs' />
                    
                </div>
                <div className='blogs-img'>
                    <img src='../assets/blogs/1 (2).webp' alt='blogs' />
                   
                </div>
                <div className='blogs-img'>
                    <img src='../assets/blogs/1 (3).jpg' alt='blogs' />
                    
                </div>
               
            </Slider>
        </div>
    );
}
