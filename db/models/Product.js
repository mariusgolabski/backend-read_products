import mongoose from "mongoose";
import Review from "./Review";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  description: { type: String },
  price: { Number },
  currency: { String },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
