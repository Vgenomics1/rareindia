import React, { useEffect } from 'react';
import './carousel.css';

const LogoSlider = ({ images }) => {
    useEffect(() => {
        const logosSlide = document.querySelector('.logos-slide');
        const copy = logosSlide.cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
    }, []);

    return (
        <div className="logos">
            <div className="logos-slide">
                {images.map((img, index) => (
                    <img key={index} src={img} alt={`Logo ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
