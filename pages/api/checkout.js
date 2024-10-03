import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";
import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).json('Invalid request method, should be POST');
    return;
  }

  const {
    name, email, city,
    phone, streetAddress, country,
    cartProducts, paymentMethod
  } = req.body;

  console.log('Request Body:', req.body);

  if (!name || !email || !cartProducts || !Array.isArray(cartProducts) || cartProducts.length === 0) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  await mongooseConnect();

  // Validate and convert product IDs to ObjectId
  let validProductIds = [];
  try {
    validProductIds = cartProducts.map(({ productId }) => {
      if (mongoose.Types.ObjectId.isValid(productId)) {
        return new mongoose.Types.ObjectId(productId);
      } else {
        throw new Error(`Invalid productId: ${productId}`);
      }
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // Fetch product information using valid ObjectIds
  let productsInfos = [];
  try {
    productsInfos = await Product.find({ _id: { $in: validProductIds } });
    if (productsInfos.length === 0) {
      return res.status(404).json({ message: 'No products found for the given IDs.' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching product information.', details: error.message });
  }

  let line_items = [];
  for (const { productId, selectedOptions: productSelectedOptions } of cartProducts) {
      const productInfo = productsInfos.find(p => p._id.equals(productId));
  
      const quantity = cartProducts.filter(p => p.productId === productId).length || 0;
  
      if (quantity > 0 && productInfo) {
          line_items.push({
              productId: productInfo._id,  // Use the ObjectId from the productInfo
              selectedOptions: productSelectedOptions || {},  // Use the selectedOptions for this product
              quantity,
          });
      }
  }
  
  
  

  if (line_items.length === 0) {
    return res.status(400).json({ message: 'No valid line items to create an order.' });
  }

  try {
    const orderDoc = await Order.create({
        line_items, 
        name, 
        email,
        city, 
        phone: req.body.phone, 
        streetAddress, 
        country, 
        paid: false,
        paymentMethod
    });
    res.json({
      message: "Order placed successfully. You will receive a confirmation message soon.",
      success: true,
      order: orderDoc, // Send back the order document for further usage
    });

    console.log('Request Body:', req.body);
    console.log('Phone Number:', phone);
    console.log('PAYM: ', paymentMethod)

} catch (error) {
    console.error('Error creating order:', error);  // Log error details
    return res.status(500).json({ message: 'Error creating order.', details: error.message });
}
}
