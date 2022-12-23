import mongoose from "mongoose";

const standardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    icon: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Standard", standardSchema);
