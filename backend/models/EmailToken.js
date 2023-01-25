import mongoose from "mongoose";

const emailTokenSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },

  token: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 3600, //1 hour
  },
});

export default mongoose.model("EmailToken", emailTokenSchema);
