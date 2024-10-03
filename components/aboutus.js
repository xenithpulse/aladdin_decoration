import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Styled components for the About section
const AboutSection = styled.section`
  width: 100%;
  padding: 50px 20px;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  // Flexbox container to handle layout
  .about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
  }

  // About text section
  .about-text {
    flex: 1;
    padding-right: 20px;
    text-align: left;

    h2 {
      text-align: center;
      font-size: 2rem;
      color: #fff;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.5rem;
      color: #fff;
      line-height: 1.5;
    }
  }

  // Image section
  .about-image {
    flex: 1;
    padding-left: 20px;
    padding-top: 105px;


    img {
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }

  // Media queries for responsiveness
  @media (max-width: 768px) {
    flex-direction: column;
padding:0px 0px;
    .about-container {
      flex-direction: column;
    }

    .about-text {
  
      text-align: center;
    }

    .about-image {
      padding-left: 0;
      margin-top: 20px;
    }
  }
`;

const AboutUs = () => {
  return (
    <AboutSection id='about-us'>
      <div className="about-container">
        {/* Left side with text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
          Aladdin-Decor is your premier destination for exquisite metal wall art and clocks in Pakistan.
          We are passionate about transforming your living spaces with captivating designs that blend artistry and functionality.
          Our collection showcases a diverse range of handcrafted pieces,
          each meticulously crafted to bring a touch of elegance and sophistication to your home or office.
          </p>
        </div>

        {/* Right side with image */}
        <div className="about-image">
        <Image
          src="https://aladdin-bucket0.s3.amazonaws.com/Frame+37.png"
          alt="About Us Image"
          width={900} // Desired width
          height={500} // Desired height
          style={{ objectFit: 'cover' }} // Optional: maintain aspect ratio
        />
        </div>
      </div>
    </AboutSection>
  );
};

export default AboutUs;
