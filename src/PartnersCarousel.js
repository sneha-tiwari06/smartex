import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoCarousel from './logocarousel';

export default function PartnersCarousel() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/partners'); 
        const filteredPartners = response.data.filter(partner => partner.active);
        setPartners(filteredPartners); 
        setLoading(false);
        console.log(filteredPartners);
      } catch (error) {
        console.error('Error fetching partners:', error);
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading partners...</p>
      ) : partners.length > 0 ? (
        <LogoCarousel partners={partners} />
      ) : (
        <div>
          <div className="heading">
            <h2 className="mb-0 h1">Smartex Partners</h2>
          </div>
          <p style={{textAlign:"center", justifyContent:"center"}}>No active partners available</p>
          {/* <img src="no-image-available.png" alt="No Image Available" /> */}
        </div>
      )}
    </div>
  );
}
