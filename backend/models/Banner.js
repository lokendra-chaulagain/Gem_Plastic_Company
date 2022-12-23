import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },

    title: {
      type: String,
    },

    description: {
      type: String,
    },

    status: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Banner", bannerSchema);
