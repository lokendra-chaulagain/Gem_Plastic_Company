import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },

    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Partner", partnerSchema);
