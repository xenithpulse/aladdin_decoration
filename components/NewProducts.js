import Center from "@/homecenter";
import ProductsGrid from "@/homepagegrid";
import Title from "./Title";

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}