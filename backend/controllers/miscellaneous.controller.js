import Color from "../models/Color.js";
import Category from "../models/Category.js";
import Size from "../models/Size.js";
import createError from "../utils/error.js";
import Product from "../models/Product.js";
import Banner from "../models/Banner.js";
import EventBanner from "../models/EventBanner.js";
import Blog from "../models/Blog.js";
import Vacancy from "../models/Vacancy.js";
import Subscriber from "../models/Subscriber.js";
import Contact from "../models/Contact.js";
import Review from "../models/Review.js";
import Service from "../models/Service.js";
import User from "../models/User.js";
import Standard from "../models/Standard.js";
import Partner from "../models/Partner.js";

const getAll = async (req, res, next) => {
  try {
    const colors = await Color.find();
    const sizes = await Size.find();
    const categories = await Category.find();
    res.status(200).json({ colors, sizes, categories });
  } catch (error) {
    return next(createError(500, "Server Error while getting all color size category !"));
  }
};

const getAllCountData = async (req, res, next) => {
  try {
    const productCount = await Product.countDocuments();
    const bannerCount = await Banner.countDocuments();
    const eventBannerCount = await EventBanner.countDocuments();
    const blogCount = await Blog.countDocuments();
    const vacancyCount = await Vacancy.countDocuments();
    const subscriberCount = await Subscriber.countDocuments();
    const mailCount = await Contact.countDocuments();
    const reviewCount = await Review.countDocuments();
    const categoryCount = await Category.countDocuments();
    const colorCount = await Color.countDocuments();
    const sizeCount = await Size.countDocuments();
    const partnerCount = await Partner.countDocuments();
    const standardCount = await Standard.countDocuments();
    const userCount = await User.countDocuments();
    const serviceCount = await Service.countDocuments();
    res.status(200).json({ productCount, bannerCount, bannerCount, eventBannerCount, blogCount, bannerCount, subscriberCount, reviewCount, colorCount, sizeCount, partnerCount, standardCount, userCount, vacancyCount, mailCount, categoryCount, serviceCount });
  } catch (error) {
    return next(createError(500, "Server Error while getting all EventBanner !"));
  }
};

export { getAll, getAllCountData };
