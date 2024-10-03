import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { CartContext } from "@/components/CartContext";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';

const ProductWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: white;
  margin: auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0;
  transform: scale(1);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1.005);
    box-shadow: 5px 10px 20px rgba(0,0,0,0.2);
  }
    @media (max-width: 768px) {
    width: 200px; /* Stack cards one below the other on small screens */
    height:320px;
  }
`;


const Top = styled.div`
  height: 80%;
  width: 100%;
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
  position: relative;
  cursor: pointer;
`;

const Bottom = styled.div`
  width: 200%;
  height: 100px;
  transition: transform 0.5s;
  display: flex;
  position: relative;

  &.clicked {
    transform: translateX(-50%);
  }

  .left, .right {
    width: 50%;
    height: 100%;
    position: relative;
  }

  .left {
    background: #f4f4f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .details {
      padding: 20px;
      width: calc(70% - 40px);
    }

    .details h1 {
      font-size: 16px;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .details p {
      font-size: 14px;
    }

    .buy {
      width: calc(30% - 2px);
      height: 100%;
      background: #f1f1f1;
      transition: background 0.5s;
      border-left: solid thin rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #A6CDDE;
      }

      svg {
        font-size: 30px;
        margin-bottom: 21px;
        color: #000;
      }
    }
  }

  .right {
    background: #A6CDDE;
    color: white;
    height: 200%;
    overflow: hidden;
    display: flex;
    align-items: top;
    justify-content: space-between;
    padding: 0 10px;

    .details {
      padding: 20px;
      width: calc(70% - 40px);
    }

    .done, .remove {
      width: calc(30% - 2px);
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: transform 0.5s;

      svg {
        font-size: 20px;
        color: white;
      }
    }

    .done {
      background: #009688;
      border-right: solid thin rgba(255,255,255,0.3);

      &:hover {
        transform: translateY(-100%);
      }
    }

    .remove {
      background: #BC3B59;
      border-right: solid thin rgba(255,255,255,0.3);
      transition: background 0.5s;

      &:hover {
        background: #9B2847;
        transform: translateY(-100%);
      }

      svg {
        font-size: 20px;
      }
    }
  }
`;

const Inside = styled.div`
  z-index: 9;
  background: #000;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;

  .icon {
    position: absolute;
    right: 85px;
    top: 85px;
    color: white;
    opacity: 1;
    transition: opacity 0.5s;
  }

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;

    .icon {
      opacity: 100%;
      right: 15px;
      top: 15px;
    }

    .contents {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  .contents {
    padding: 5%;
    opacity: 0;
    transform: scale(0.5) translateY(-200%);
    transition: opacity 0.2s, transform 0.8s;
    

    table {
      text-align: left;
      width: 100%;
    }

    h1, p, table {
      color: white;
      gap: -6px;

    }

    p {
      font-size: 13px;

    }
  }
`;

const WhiteBox = styled.div`
  background-color: #fff;
  padding: 10px;
  position: relative;
  height: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export default function ProductBox({ _id, title, price, images , properties}) {
  const { addProduct } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleAddProduct = () => {
    addProduct(_id);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset the state after the pop-out effect
  };

  const handleImageClick = () => {
    router.push(`/product/${_id}`); // Navigate to the single product page
  };

  useEffect(()=>{

  },properties)

  
  return (
    <ProductWrapper>
      <Top imageUrl={images?.[0]} onClick={handleImageClick} />
      <Bottom>
        <div className="left">
          <div className="details">
            <h1>{title}</h1>
            <p>Rs. {price}</p>
          </div>
          <div className="buy" onClick={handleImageClick} isClicked={isClicked}>
            <AddShoppingCartIcon />
          </div>
        </div>
      </Bottom>
      {<Inside>
        <div className="icon">
          <InfoIcon />
        </div>
          <div className="contents">
          <>
               {
                properties && <>
   {
                  Object.keys(properties).map((pn)=>{
return <>
<h3 style={{
  color:"white"
}}> 
  {pn}
</h3>
<>
{
  properties[pn].map((pp)=>{
    return <p>
      {pp} 
    </p>
  })
}
</>
</>

                  })
                }
                </>
               }
               </>
          </div>
        )
       </Inside> } 
      <WhiteBox>
        <img src={images?.[0]} alt={title} onClick={handleImageClick} />
      </WhiteBox>
    </ProductWrapper>
  );
}
