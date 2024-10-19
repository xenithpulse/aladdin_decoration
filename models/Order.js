import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema({
  line_items: [{
    productId: { type: String, required: true },
    selectedOptions: { type: Object, required: true }, // Add this line
    quantity: { type: Number, required: true },
  }],
  name: String,
  email: String,
  city: String,
  phone: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
  paymentMethod: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Order = models?.Order || model('Order', OrderSchema);
