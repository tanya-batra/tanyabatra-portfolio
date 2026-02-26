import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    content: String,
  },
  { timestamps: true }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
