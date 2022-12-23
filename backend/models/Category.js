import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },

  image: {
    type: String,
  },

  url: {
    type: String,
  },

  description: {
    type: String,
  },
});

export default mongoose.model("Category", categorySchema);
