import React from 'react'

export default function Carousel() {
    return (
        <div className="App" style={{ width: "full", margin: "auto", padding: "50px" }}
        >
            <Carousel arrows infinite>
                <img src={Image1} />
                <img src={Image2} />
                <img src={Image3} />
            </Carousel>
        </div>
    );
}