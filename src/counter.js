import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [guests, setGuests] = useState(0);
    const [architects, setArchitects] = useState(0);
    const [speakers, setSpeakers] = useState(0);

    const guestFinalNumber = 523;
    const architectFinalNumber = 289;
    const speakerFinalNumber = 67;

    
    const guestStep = guestFinalNumber / 100; 
    const architectStep = architectFinalNumber / 100;
    const speakerStep = speakerFinalNumber / 100;

    useEffect(() => {
        const guestInterval = setInterval(() => {
            setGuests(prevGuests => Math.min(prevGuests + guestStep, guestFinalNumber));
        }, 10);

        const architectInterval = setInterval(() => {
            setArchitects(prevArchitects => Math.min(prevArchitects + architectStep, architectFinalNumber));
        }, 10);

        const speakerInterval = setInterval(() => {
            setSpeakers(prevSpeakers => Math.min(prevSpeakers + speakerStep, speakerFinalNumber));
        }, 10);

        return () => {
            clearInterval(guestInterval);
            clearInterval(architectInterval);
            clearInterval(speakerInterval);
        };
    }, [guestStep, guestFinalNumber, architectStep, architectFinalNumber, speakerStep, speakerFinalNumber]);

    return (
        <section className="counter-sec py-4 pb-md-4 pb-3">
            <div className="container">
                <div className="col-12 glance-usp animatable fadeInUp">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-6 text-center">
                            <div className="count-area-content">
                                <h2><span className="counter">{Math.round(guests)}</span>+</h2>
                                <p>Guests</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-6 text-center">
                            <div className="count-area-content">
                                <h2><span className="counter">{Math.round(architects)}</span>+</h2>
                                <p>Architects &amp; Designers</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center">
                            <div className="count-area-content">
                                <h2><span className="counter">{Math.round(speakers)}</span>+</h2>
                                <p>Speakers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
