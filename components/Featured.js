// pages/_app.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const CarouselContainer = styled.div`
  margin-top: 62px; /* Adjusts based on header height */
  width: 100%;
`;

const NextJsCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        showArrows={false}            // Removes left and right arrows
        showThumbs={false}            // Removes small images (thumbnails) below the slider
        autoPlay={true}               // Enables auto slide
        infiniteLoop={true}           // Loop through images infinitely
        showStatus={false}            // Removes the status indicator (e.g., 1/5)
        interval={3000}               // Adjust the time interval for auto-slide (in milliseconds)
        stopOnHover={false}           // Keeps auto slide even when hovering over the carousel
        showIndicators={true}
      >
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+40.png"
            alt="image2"
          />
        </div>
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+35.png"
            alt="image3"
          />
        </div>
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+36.png"
            alt="image5"
          />
        </div>
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+39.png"
            alt="image6"
          />
        </div>
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+34.png"
            alt="image7"
          />
        </div>
        <div>
          <img
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+38.png"
            alt="image8"
          />
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

export default NextJsCarousel;
