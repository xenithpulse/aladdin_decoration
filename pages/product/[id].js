import Center from "@/components/productpagecenter";
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel"; // Updated ImageCarousel component
import Button from "@/components/CustomButton";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import Footer from "@/components/footer";


// Styles for the overall layout
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
    margin: 80px auto;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    flex: 1.5;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const PriceSection = styled.div`
  font-size: 1.6rem;
  color: #28a745;
  font-weight: 800;

  @media (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Description = styled.div`
  font-size: 1rem;
  color: #000;

  .highlight {
    display: block;
    margin-top: 4px;
    margin-bottom: -3px;
  }

  @media (min-width: 768px) {
    font-size: 1.04rem;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: -2px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 5px;
  margin-top: -5px;
  @media (min-width: 768px) {
    width: 600px;
  }
`;

const StyledSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  color: #333;
  width: 100%;
  max-width: 600px;
  height: 48px;
  border: ${({ hasError }) => (hasError ? '2px solid red' : '1px solid #ddd')};
  border-radius: 5px;
  background-color: #fff;
`;

const AddToCartSection = styled.div`
  display: flex;
  margin-top: -3px;
  width: 100%;
  gap: 5px;
  max-width: 700px;
  flex-direction: row;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

const ShippingInfo = styled.p`
  margin-top: 0px;
  font-size: 0.9rem;
  color: #000;
  margin-bottom: 5px;

  &:before {
    content: '✔ ';
    color: green;
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 10px;
  }
`;

const ReturnsInfo = styled.p`
  margin-top: 5px;
  font-size: 0.9rem;
  color: #000;

  &:before {
    content: '✔ ';
    color: green;
    font-size: 1rem;
  }
`;

const RequiredField = styled.span`
  color: red;
  margin-left: 2px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 3px;
`;

const PropertyTitle = styled.h4`
  margin-bottom: 5px;
`;
const MessageContainer = styled.div`
  position: fixed;
  bottom: 20%; /* Slightly above the bottom */
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  opacity: 0.9;
  z-index: 1000;
  transition: opacity 0.4s ease;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [errors, setErrors] = useState({});
  const [price, setPrice] = useState(product.price); // Initial price
  const [showMessage, setShowMessage] = useState(false);

  const handleOptionChange = (propertyName, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [propertyName]: value,
    }));

    // Update price based on selected Dimensions
    if (propertyName.toLowerCase() === "dimensions") {
      const selectedOption = value;
      const priceMatch = selectedOption.match(/\(PKR\s([\d,.]+)\)/);
      if (priceMatch) {
        setPrice(priceMatch[1].replace(",", ""));
      }
    }
  };

  
  const handleAddToCart = () => {
    const newErrors = {};
  
    // Check if all required options are selected
    Object.keys(product.properties).forEach((propertyName) => {
      if (!selectedOptions[propertyName]) {
        newErrors[propertyName] = "Please select an option";
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Pass the product ID and selected options to the addProduct function
      addProduct(product._id, selectedOptions); // Updated to include selectedOptions
  
      // Show the "Item added to cart" message
      setShowMessage(true);
  
      // Hide the message after 2 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };
  

  const handleAddToBuy = () => {
    const newErrors = {};

    // Check if all required options are selected
    Object.keys(product.properties).forEach((propertyName) => {
        if (!selectedOptions[propertyName]) {
            newErrors[propertyName] = "Please select an option";
        }
    });

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        setErrors({});
        // Pass the product ID and selected options to the addProduct function
        addProduct(product._id, selectedOptions); // Updated to include selectedOptions
        
        // Redirect to cart page
        window.location.href = "/cart";
    }
};



  const getFormattedDescription = () => {
    const highlights = [];
    let remainingDescription = product.description || "";

    const firstHighlightIndex = remainingDescription.indexOf("►");
    let normalDescription = "";

    if (firstHighlightIndex !== -1) {
      normalDescription = remainingDescription.slice(0, firstHighlightIndex).trim();
      remainingDescription = remainingDescription.slice(firstHighlightIndex).trim();
    } else {
      normalDescription = remainingDescription;
      remainingDescription = "";
    }

    while (remainingDescription.includes("►")) {
      const start = remainingDescription.indexOf("►");
      const nextHighlight = remainingDescription.indexOf("►", start + 1);

      let end;
      if (nextHighlight !== -1) {
        end = nextHighlight;
      } else {
        end = remainingDescription.length;
      }

      highlights.push(remainingDescription.slice(start, end).trim());
      remainingDescription = remainingDescription.slice(end).trim();
    }

    return (
      <>
        {normalDescription && <p>{normalDescription}</p>}
        {highlights.map((highlight, idx) => (
          <span key={idx} className="highlight">
            {highlight}
          </span>
        ))}
        {remainingDescription && <p>{remainingDescription}</p>}
      </>
    );
  };

  const currentDate = new Date();
  const estimatedShippingStart = new Date(currentDate);
  estimatedShippingStart.setDate(currentDate.getDate() + 3);

  const shippingDateStart = estimatedShippingStart.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });

  const shippingDateEnd = new Date(estimatedShippingStart);
  shippingDateEnd.setDate(estimatedShippingStart.getDate() + 3);

  const shippingDateEndFormatted = shippingDateEnd.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });

  return (
    <>
      <Header />
      <Center>
        <PageWrapper>
          <ImageCarousel images={product.images || []} />
          <ProductInfo>
            <Title>{product.title}</Title>
            <PriceSection>PKR. {price}</PriceSection> {/* Dynamic price display */}
            <ShippingInfo>
              Arrives between {shippingDateStart} to {shippingDateEndFormatted}
            </ShippingInfo>
            <ReturnsInfo>Returns & exchanges accepted.</ReturnsInfo>
            <Description>{getFormattedDescription()}</Description>
            <SelectWrapper>
              {product.properties &&
                Object.keys(product.properties).map((propertyName, idx) => (
                  <div key={idx}>
                    <PropertyTitle>
                      {propertyName}
                      <RequiredField>*</RequiredField>
                    </PropertyTitle>
                    <StyledSelect
                      value={selectedOptions[propertyName] || ""}
                      hasError={!!errors[propertyName]}
                      onChange={(e) =>
                        handleOptionChange(propertyName, e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {product.properties[propertyName]?.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </StyledSelect>
                    {errors[propertyName] && (
                      <ErrorMessage>{errors[propertyName]}</ErrorMessage>
                    )}
                  </div>
                ))}
            </SelectWrapper>
            <AddToCartSection>
              <Button
                block
                gradient="linear-gradient(to top right, #000, #000)"
                gradientHover="linear-gradient(to top right, #000, #000)"
                radius="full"
                onClick={handleAddToCart}
                style={{ width: "100%", maxWidth: "600px", height: "48px" }}
              >
                Add to cart
              </Button>
  
              <Button
                block
                gradient="linear-gradient(to top right, #000, #000)"
                gradientHover="linear-gradient(to top right, #000, #000)"
                radius="full"
                onClick={handleAddToBuy}
                style={{ width: "100%", maxWidth: "600px", height: "48px" }}
              >
                Buy Now
              </Button>
            </AddToCartSection>
  
            {/* Display the message */}
            {showMessage && (
              <MessageContainer>
                Item added to cart
              </MessageContainer>
            )}
          </ProductInfo>
        </PageWrapper>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
