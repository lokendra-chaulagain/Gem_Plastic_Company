import Standard from "../models/Standard.js";
import createError from "../utils/error.js";

const createStandard = async (req, res, next) => {
  try {
    const newService = new Standard(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Standard !"));
  }
};

const updateStandard = async (req, res, next) => {
  try {
    const updatedService = await Standard.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Standard !"));
  }
};

const deleteStandard = async (req, res, next) => {
  try {
    const deletedService = await Standard.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Standard !"));
  }
};

const getStandardById = async (req, res, next) => {
  try {
    const singleService = await Standard.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Standard by Id !"));
  }
};

const getAllStandard = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";

  const query = {
    title: { $regex: search, $options: "i" },
  };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = (page - 1) * size;

    const totalStandardCount = await Standard.countDocuments();
    const allStandard = await Standard.find(query)
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    res.status(200).json({
      totalStandardCount,
      allStandard,
    });
  } catch (error) {
    return next(createError(500, "Server Error while getting all Standard !"));
  }
};

export { createStandard, updateStandard, deleteStandard, getStandardById, getAllStandard };
