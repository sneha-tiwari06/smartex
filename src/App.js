import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sponsership from './sponsership';
import WinnersGallery from './winnersgallery';
import Home from './home'
import AboutUS from "./about-us";
import Blog2 from "./our-blogs";
import Contact from "./contact";
import ReadMore from "./blog-details";
import Partners from "./partners";
import EventDesc from "./smartex-events";
import CeremonyMore from "./ceremony";
import Speakers from "./speakers";



function App() {
  return (

    <Router basename="my-react-app">
      <div className="App">


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/winnersgallery" element={<WinnersGallery />} />
          <Route path="/sponsership" element={<Sponsership />} />
          <Route path="/about-us" element={<AboutUS />} />
          <Route path="/our-blogs" element={<Blog2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog-details/:id" element={<ReadMore />} />
          
          <Route path="/partners" element={<Partners />} />
          <Route path="/smartex-events" element={<EventDesc />} />
          <Route path="/ceremony" element={<CeremonyMore />} />
          <Route path="/speakers" element={<Speakers />} />

        </Routes>


      </div>
    </Router>

  );
}


export default App;
