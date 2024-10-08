import styled from 'styled-components';
import NavLink from 'next/link';
import Center from "@/homecenter";
import Title from './Title';

// Styled components
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Two columns for small devices */
  gap: 10px; /* Space between grid items */
  margin-left: 0px; /* Ensure consistent margin on both sides */
  margin-right: 10px;

  /* Tablet and larger screens: Three columns layout */
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Three columns for tablets */
  }

  /* Larger screens: Four columns layout */
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Four columns for large devices */
  }

  /* Optional: Ensures grid items don't exceed their container width */
  width: 100%;
  box-sizing: border-box;
`;

const CategoryBox = styled(NavLink)`
  display: block;
  width: 100%;
  height: 300px;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative; /* Set position to relative for the overlay */
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with 50% opacity */
  z-index: 1; /* Ensure it sits above the image but below the text */
`;

const CategoryTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: bold;
  position: relative; /* Position title above the overlay */
  z-index: 2; /* Make sure title is above overlay */
`;

export default function Home() {
  return (
    <Center>
      <Title>Categories</Title>
      <CategoryGrid>
        <CategoryBox href="/wallclocks" passHref>
          <CategoryImage image="https://aladdin-bucket0.s3.amazonaws.com/1726578159242.png">
            <Overlay />
            <CategoryTitle>Wall Clocks</CategoryTitle>
          </CategoryImage>
        </CategoryBox>

        <CategoryBox href="/Wallart" passHref>
          <CategoryImage image="https://aladdin-bucket0.s3.amazonaws.com/1728368843559.webp">
            <Overlay />
            <CategoryTitle>Wall Arts</CategoryTitle>
          </CategoryImage>
        </CategoryBox>

        <CategoryBox href="/homedecor" passHref>
          <CategoryImage image="https://aladdin-bucket0.s3.amazonaws.com/1728379139002.webp">
            <Overlay />
            <CategoryTitle>Home Decor</CategoryTitle>
          </CategoryImage>
        </CategoryBox>
      </CategoryGrid>
    </Center>
  );
}
