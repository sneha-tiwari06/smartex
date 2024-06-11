import Navbar from "./navbar";
import Nav2 from "./nav2";
import Footer from "./footer";

export default function AboutUS() {
    return (
        <div className="AboutUs">
            <Navbar />
            <Nav2 />
            <div className="w-100 insiadebanner padding">
            <div className="heading">
                <h1>About Smartex</h1>
            </div>
        </div>
        <div className="w-100 padding bg-inside">
            <div className="container">
                <div className="aboutus" style={{ textAlign:"left", fontSize:"16px"}}>
                   <p>SMARTEX is a congregation of smart minds and products endeavored as a symposium & expo, focusing on smart design, emerging technologies, and innovation in the realm of architecture & interior design. </p>
                    <p>This symposium is an engaging plethora that brings people together, becoming a driving force to encourage the architectural and innovative works of the nation. An initiative by Building Material Reporter (BMR) and industry experts serving as curators, it comes with a unique theme and agenda concentrating on smart innovation.</p> 
                    <p>SMARTEX stands as a convergence of brilliant minds and innovative products, presented as both a symposium and expo with a focus on intelligent design, emerging technologies, and innovation within the realms of architecture and interior design.</p>

                    <p>This symposium serves as a captivating hub that unites individuals, acting as a driving force to foster architectural and innovative endeavours nationwide. An initiative led by Building Material Reporter (BMR) alongside industry experts as curators, SMARTEX boasts a unique theme and agenda dedicated to the advancement of smart innovation.</p>

                    <p>The Smart Design Expo serves as a showcase for cutting-edge products, providing significant professionals and stakeholders with first hand experiences of the latest technologies. It serves as a platform for meaningful conversations on innovation and the evolution of design.</p>

                    <p>This inclusive platform brings together professionals from various yet interconnected fields, including architects, interior designers, builders, real estate developers, landscape designers, structural engineers, technical consultants, and product manufacturers. Together, they convene for an impactful rendezvous that advocates smart design and innovation, shaping the future landscape of India.</p>

                    <h5 className="red">SMART DESIGN CONCLAVE</h5>
                    <p>The Smart Design Conclave is a gathering tailored specifically for tier-2 cities, committed to advancing the vision of a more beautiful and enhanced India through innovative design, architecture, smart products, and technology.</p>

                    <h5 className="red">DINE WITH DESIGNERS</h5>
                    <p>A networking evening, meticulously curated to spotlight tier-3 cities wherein leading architects, designers, and consultants gather to engage in a dialogue centered around smart products and innovation.</p>

                    <h5 className="red">WHO CAN ATTEND</h5>
                    <p>Those envisioning an active role in the near future, involving smart design, innovation, or emerging technologies, stand to gain by becoming part of this ecosystem dedicated to reshaping the future of our industry.</p>
                    <ul className="list ml-3 mb-3">
                        <li>Architects</li>
                        <li>Interior Designers</li>
                        <li>Builders & Real Estate Developers</li>
                        <li>Engineers</li>
                        <li>Consultants</li>
                        <li>Product Manufacturers</li>
                        <li> Researchers & Students (Architecture & Interior Design)</li>
                        <li>Local Government Bodies</li>
                    </ul>

                    <h5 className="red">WHY ATTEND</h5>
                    <p>If you have an idea that is smart, a product that embraces smartness & innovation or involved in design & construction sector that must appreciates a smart upgrade, SMARTEX is the place to be!</p>
                    <ul className="list mb-3 ml-3">
                        <li><strong>Futuristic Discourse - </strong>Initiating a thought-provoking discourse towards modern spaces. We are making you future-ready.</li>
                        <li><strong>Innovative Platform - </strong>An Event with attendance of Architects, Designers, Consultants, Builders & Developers will get to witness latest products.</li>
                        <li><strong>Networking Hub - </strong>A platform where professionals from distinguished, but associated fields, could come forward, collaborate and network.</li>
                        <li><strong>Knowledge Powered - </strong>Sessions throwing light on latest trends, emerging technologies, and innovations that are responsible for creating future of design & architecture.</li>
                    </ul>

                    <h5 className="red">KEY HIGHLIGHTS</h5>
                    <ul className="list ml-3 mb-3">
                        <li>Symposium</li>
                        <li>Innovation Awards</li>
                        <li>Smart Products Design Expo</li>
                        <li>Keynote Talks</li>
                        <li>The Approach</li>
                        <li>The Opportunity</li>
                        <li>Project Presentations</li>
                        <li>Panel Discussions</li>
                        <li>VIP Networking Dinner</li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
} 