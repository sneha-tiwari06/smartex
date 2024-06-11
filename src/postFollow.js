import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PostFollow() {
    // const settings = {
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://embedsocial.com/cdn/ht.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="w-100 padding" style={{backgroundColor: "#f1f1f1", marginTop: "5rem"}}>
            <div className="container" >
                <div className="embedsocial-hashtag" data-ref="f4441c30b021fe1ee5518d29264750a1c5c9d46a">
                    <a className="feed-powered-by-es feed-powered-by-es-slider-img" href="https://embedsocial.com/social-media-aggregator/" target="_blank" rel="noreferrer" title="Instagram widget">
                        <img src="https://embedsocial.com/cdn/images/embedsocial-icon.png" alt="EmbedSocial" style={{ display: 'none' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}
