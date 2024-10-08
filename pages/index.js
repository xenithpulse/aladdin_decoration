import Header from "@/components/Header";
import NextJsCarousel from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import AboutUs from "@/components/aboutus";
import Footer from "@/components/footer";
import Image from 'next/image';
import { shuffle } from "lodash";
import ShuffledProducts from "@/components/shuffledhomeproducts";
import Home from "@/components/category_box";
import { Category } from "@/models/Category";


export default function HomePage({ newProducts, shuffledProducts }) {

  return (
    <div style={{
      overflowX:"hidden"
    }} >
      <Header />
      <NextJsCarousel/>
      <NewProducts products={newProducts} />
      <Home/>

      {/* Image container with transform for positioning */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '30px', // Adjust the space above the image
          marginBottom: '50px' // Adjust the space below the image (optional)
        }}
      >
      <Image
        src="https://aladdin-bucket0.s3.amazonaws.com/Frame+33.png"
        alt="Decorative Image"
        width={1200} // Set appropriate max width
        height={800} // Set appropriate height based on aspect ratio
        style={{
          width: '100%', // Ensure responsiveness
          maxWidth: '1200px', // Max width for larger screens
          height: 'auto', // Maintain aspect ratio
          borderRadius: '10px', // Optional: add rounded corners
          transform: 'translate(1px, 30px)', // Move image right by 1px and down by 30px
        }}
      />
      </div>
      <ShuffledProducts products={shuffledProducts} />
      <AboutUs />
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  console.log("Connected to MongoDB.");

  try {
      const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 4 }).populate('category');
      const allProducts = await Product.find({}).populate('category');
      const shuffledProducts = shuffle(allProducts).slice(0, 12);


      return {
          props: {
              newProducts: JSON.parse(JSON.stringify(newProducts)),
              shuffledProducts: JSON.parse(JSON.stringify(shuffledProducts)),
          },
      };
  } catch (error) {
      return {
          props: {
              newProducts: [],
              shuffledProducts: [],
          },
      };
  }
}