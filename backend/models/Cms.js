import mongoose from "mongoose";

const cmsSchema = new mongoose.Schema(
  {
    facebookUrl: {
      type: String,
    },

    instagramUrl: {
      type: String,
    },

    twitterUrl: {
      type: String,
    },

    email: {
      type: String,
    },

    phone1: {
      type: String,
    },

    phone2: {
      type: String,
    },

    whatsapp: {
      type: String,
    },

    companyName: {
      type: String,
    },

    companyLogo: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cms", cmsSchema);
