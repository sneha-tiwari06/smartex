
import './App.css';
import About from './about';
import Blog from './blog';

// import Blogs from './blogging';
import Ceremony from './frontend-ceremony';
import Counter from './counter';
import Events from './events';
import Footer from './footer';
import HeroVideo from './heroVideo';
// import LogoCarousel from './logocarousel';
import Nav2 from './nav2';
import Navbar from './navbar';
import PostFollow from './postFollow';

import StarSpeaks from './starSpeaks';
import UpcomingEvents from './upcoming_events';
import PartnersCarousel from './PartnersCarousel';


function Home() {
  return (
    
      <div className="App">
        <Navbar />
        <Nav2 />
        <HeroVideo />
        <Counter />
        <About />
        <Events />
        <Ceremony />
        <StarSpeaks />
        <PartnersCarousel />
        <Blog />
        <UpcomingEvents />
        <PostFollow />


       
        <Footer />
   
       
       
      
      </div>
  
  );
}


export default Home;
