import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
    image: {
      type: String,
    },

    color: {
      type: [String],
    },

    size: {
      type: [String],
    },

    category: {
      ref: "category",
      type: mongoose.Schema.Types.ObjectId,
    },

    description: {
      type: String,
    },

    featured: {
      type: String,
    },

    topSelling: {
      type: String,
    },

    url: {
      type: String,
    },

    
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
