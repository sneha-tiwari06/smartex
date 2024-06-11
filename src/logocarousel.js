import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoCarousel({ partners }) {
//   console.log("Partners data:", partners);
  return (
    <div className="logo-carousel-container">
      <div className="heading">
        <h2 className="mb-0 h1">Smartex Partners</h2>
      </div>
      <div className="logo-carousel">
        {partners && partners.length > 0 ? (
          partners.map((partner, index) => (
            <div key={index} className="brand-logo">
              <Link to='/partners'>
                <img src={`http://localhost:3000/upload/${partner.image_url}`} alt={partner.alt_tag} />
              </Link>
            </div>
          ))
        ) : null} 
      </div>
    </div>
  );
}
