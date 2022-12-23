import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema({
  name: {
    type: [String],
  },
});

export default mongoose.model("Size", sizeSchema);
