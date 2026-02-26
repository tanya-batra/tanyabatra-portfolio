import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    github: String,
    demo: String,

    category: String,
    designedBy: String,
    projectDate: { type: String, required: true },
    keywords: [String],

    image: String, // Cloudinary URL
    imagePublicId: String, // Required to delete image
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
