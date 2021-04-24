import React from 'react'
const carousel1 = 'https://amtshows.com/wp-content/uploads/2014/05/stand-up-comedy-neon-sign.jpg';
const carousel2 = 'https://iulianionescu.com/wp-content/uploads/standup-comedy.jpg';
const carousel3 = "https://media.timeout.com/images/105411928/630/472/image.jpg";
export default function Carousel() {
    return (
        <div className="App" style={{ width: "full", margin: "auto", padding: "50px" }}>
            <Carousel arrows infinite>
                <img src={carousel1} />
                <img src={carousel2} />
                <img src={carousel3} />
            </Carousel>
        </div>
    );
}

