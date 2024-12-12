import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, Image } from 'pure-react-carousel';
import car1 from '../assets/car1.jpeg';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.jpg';


export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={50}
      totalSlides={3}>
      <Slider>
          <Slide index={0}>
              <Image 
                  src={car1}
                  hasMasterSpinner={true}
              />
          </Slide>
          <Slide index={1}>
              <Image 
                  src={car2}
                  hasMasterSpinner={true}
              />
          </Slide>
          <Slide index={3}>
              <Image 
                  src={car3}
                  hasMasterSpinner={true}
              />
          </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
    );
  }
}