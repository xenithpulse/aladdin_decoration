import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export default async function handle(req, res) {
  await mongooseConnect();

  console.log("Received request for cart products:", req.body.ids);

  const cartProducts = req.body.ids || [];

  if (!Array.isArray(cartProducts) || cartProducts.length === 0) {
    console.log("Invalid cart products provided");
    return res.status(400).json({ error: "No cart products provided or invalid format" });
  }

  for (const item of cartProducts) {
    if (!item.productId || typeof item.productId !== "string") {
      console.log("Invalid productId in cart item:", item);
      return res.status(400).json({ error: "Each cart item must have a valid productId" });
    }
    if (!item.selectedOptions || typeof item.selectedOptions !== "object") {
      console.log("Invalid selectedOptions in cart item:", item);
      return res.status(400).json({ error: "Each cart item must have valid selectedOptions" });
    }
  }

  const validProductIds = cartProducts
    .map(item => item.productId)
    .filter(id => mongoose.Types.ObjectId.isValid(id))
    .map(id => new mongoose.Types.ObjectId(id));

  if (validProductIds.length === 0) {
    console.log("No valid product IDs found");
    return res.status(400).json({ error: "No valid product IDs provided" });
  }

  try {
    const productsInfos = await Product.find({ _id: { $in: validProductIds } });
    console.log("Fetched product infos:", productsInfos);

    const line_items = cartProducts.map(({ productId, selectedOptions }) => {
      const productInfo = productsInfos.find(p => p._id.equals(productId));
      return productInfo
        ? {
            productId: productInfo._id.toString(),
            selectedOptions,
            quantity: cartProducts.filter(p => p.productId === productId).length,
            price: productInfo.price,
            title: productInfo.title,
            image: productInfo.images[0] || null // Add image to the response
          }
        : null;
    }).filter(Boolean); // Filter out any null entries

    console.log("Response line items:", line_items);
    res.json(line_items);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products", details: error.message });
  }
}
