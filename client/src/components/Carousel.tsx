import React, { useEffect, useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const DynamicCarousel = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch('http://localhost:9090/avalCars');
                let data = await response.json();
                console.log(data);
                data = data.availableCars;
                const processedData = data.map(car =>({
                    ...car,
                    imageUrl: `/assets/${car.imagemPath}`,
                }));
                setCars(processedData);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={cars.length}
        >
            <Slider>
                {cars.map((processedData, index) => (
                    <Slide index={index} key={index}>
                        <Image src={processedData.imageUrl} hasMasterSpinner={true} />
                    </Slide>
                ))}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
};

export default DynamicCarousel;
