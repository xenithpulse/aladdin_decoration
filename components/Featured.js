// pages/_app.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import Image from "next/image";

const CarouselContainer = styled.div`
  margin-top: 62px;
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 50px; /* Adjust margin for mobile if needed */
  }
`;

const CarouselImage = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }
`;
const NextJsCarousel = () => {
  return (
    <CarouselContainer>
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        showIndicators={true}
      >
        {/* Each div below wraps the Image for better styling */}
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+40.png"
            alt="image2"
            width={2000} // Original width
            height={750} // Original height
          />
        </CarouselImage>
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+35.png"
            alt="image3"
            width={2000}
            height={750}
          />
        </CarouselImage>
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+36.png"
            alt="image5"
            width={2000}
            height={750}
          />
        </CarouselImage>
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+39.png"
            alt="image6"
            width={2000}
            height={750}
          />
        </CarouselImage>
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+34.png"
            alt="image7"
            width={2000}
            height={750}
          />
        </CarouselImage>
        <CarouselImage>
          <Image
            src="https://aladdin-bucket0.s3.amazonaws.com/Frame+38.png"
            alt="image8"
            width={2000}
            height={750}
          />
        </CarouselImage>
      </Carousel>
    </CarouselContainer>
  );
};

export default NextJsCarousel;
