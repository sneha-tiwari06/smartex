import { Link } from 'react-router-dom';
// import './about.css';


export default function About() {
    return (
        <div class="w-100 padding">
            <div class="container text-center">
                <div class="heading">
                    <h1>About Smartex</h1>
                </div>
                <div class="aboutus">
                    <p>SMARTEX is a congregation of smart minds and products endeavored as a symposium & expo, focusing on smart design, emerging technologies, and innovation in the realm of architecture & interior design. </p>
                    <p>This symposium is an engaging plethora that brings people together, becoming a driving force to encourage the architectural and innovative works of the nation. An initiative by Building Material Reporter (BMR) and industry experts serving as curators, it comes with a unique theme and agenda concentrating on smart innovation. <Link to="/about-us" style={{color: "red"}}>Read More</Link></p>
                </div>
            </div>
        </div>
    );
}
