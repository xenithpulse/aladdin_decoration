import Header from "@/components/Header";
import NextJsCarousel from "@/components/Featured";
import NewProducts from "@/components/NewProducts";
import AboutUs from "@/components/aboutus"; 
import Footer from "@/components/footer"; 
import Image from 'next/image';
import Home from "@/components/category_box"; 
import ShuffledProducts from "@/components/shuffledhomeproducts";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { shuffle } from "lodash";

export default function HomePage({ newProducts, shuffledProducts }) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <NextJsCarousel />
      <NewProducts products={newProducts} />
      <Home />

      {/* Image container with transform for positioning */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '50px' }}>
        <Image
          src="https://aladdin-bucket0.s3.amazonaws.com/Frame+33.png"
          alt="Decorative Image"
          width={1200}
          height={800}
          style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            borderRadius: '10px',
            transform: 'translate(1px, 30px)',
          }}
        />
      </div>
      
      <ShuffledProducts products={shuffledProducts} />
      <AboutUs />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 4 }).populate('category');
  const allProducts = await Product.find({}).populate('category');
  const shuffledProducts = shuffle(allProducts).slice(0, 12);

  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      shuffledProducts: JSON.parse(JSON.stringify(shuffledProducts)),
    },
  };
}
