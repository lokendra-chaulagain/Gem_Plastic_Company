import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import contactRoute from "./routes/contact.route.js";
import productRoute from "./routes/product.route.js";
import blogRoute from "./routes/blog.route.js";
import partnerRoute from "./routes/partner.route.js";
import standardRoute from "./routes/standard.route.js";
import vacancyRoute from "./routes/vacancy.route.js";
import reviewRoute from "./routes/review.route.js";
import serviceRoute from "./routes/service.route.js";
import bannerRoute from "./routes/banner.route.js";
import eventBannerRoute from "./routes/eventBanner.route.js";
import cmsRoute from "./routes/cms.route.js";
import subscriberRoute from "./routes/subscriber.route.js";
import categoryRoute from "./routes/category.route.js";
import colorRoute from "./routes/color.route.js";
import sizeRoute from "./routes/size.route.js";
import getAllRoute from "./routes/miscellaneous.route.js";

import userRoute from "./routes/user.route.js";

import cors from "cors";
import cookieParser from "cookie-parser";
const port = process.env.PORT;

app.use("/gem", express.static("./gem"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//DbConnection
mongoose
  .connect(process.env.MONGO_DB_URI, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDb connected successfully !");
  })
  .catch((error) => {
    console.log("MondoDb Disconnected !!!", error);
  });

//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});

app.use("/api/contact", contactRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/vacancy", vacancyRoute);
app.use("/api/partner", partnerRoute);
app.use("/api/review", reviewRoute);
app.use("/api/cms", cmsRoute);
app.use("/api/standard", standardRoute);
app.use("/api/service", serviceRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/eventBanner", eventBannerRoute);
app.use("/api/subscriber", subscriberRoute);
app.use("/api/category", categoryRoute);
app.use("/api/color", colorRoute);
app.use("/api/size", sizeRoute);
app.use("/api/getAll", getAllRoute);

app.use("/api/user", userRoute);

//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
