import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },

    subtitle: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
