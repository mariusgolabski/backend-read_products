import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { Number },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);
export default Review;
