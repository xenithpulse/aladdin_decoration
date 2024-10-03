import Header from "@/components/Header";
import Center from "@/homecenter";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category"; // Ensure this path is correct
import ProductsGrid from "@/homepagegrid";
import Title from "@/components/Title";
import styled from "styled-components";
const Wallclockdiv = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  
  min-height : 100vh;
`;

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Wallclockdiv>
        <Title style={{ marginTop: '80px' }}>Explore Wall Clocks</Title> {/* Adjust margin here */}
        <ProductsGrid products={products} />

      </Wallclockdiv>
    </>

  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  // Find the category by name
  const category = await Category.findOne({ name: 'Wall Clock' });

  if (!category) {
    // Handle case where category is not found
    return {
      props: {
        products: [],
      }
    };
  }

  // Fetch products that belong to the found category
  const products = await Product.find({ category: category._id }, null, { sort: { '_id': -1 } });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}
