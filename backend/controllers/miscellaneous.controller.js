import Color from "../models/Color.js";
import Category from "../models/Category.js";
import Size from "../models/Size.js";
import createError from "../utils/error.js";

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

export { getAll };
