import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import AboutUs from "@/components/aboutus";
import Wallart from "./Wallart";
import Footer from "@/components/footer";
import Image from 'next/image';


export default function HomePage({ newProducts }) {
  // Filter newProducts to include only those in the "Wall Art" category
  const wallArtProducts = newProducts.filter(product => product.category.name === 'Wall Art');

  return (
    <div style={{
      overflowX:"hidden"
    }} >
      <Header />
      <Featured />
      <NewProducts products={newProducts} />


      {/* Image container with transform for positioning */}
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '30px', // Adjust the space above the image
          marginBottom: '20px' // Adjust the space below the image (optional)
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
      <Wallart products={wallArtProducts} />
      <AboutUs />
      <Footer/>
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  // Fetch products and populate category field
  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 4 }).populate('category');
  return {
    props: {
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
