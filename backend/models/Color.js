import mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model("Color", colorSchema);
