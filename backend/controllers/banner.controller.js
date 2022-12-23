import Banner from "../models/Banner.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createBanner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Banner(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Banner !"));
  }
};

const updateBanner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Banner.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Banner !"));
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const deletedService = await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Banner !"));
  }
};

const getBannerById = async (req, res, next) => {
  try {
    const singleService = await Banner.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Banner by Id !"));
  }
};

const getAllBanner = async (req, res, next) => {
  try {
    const allService = await Banner.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Banner !"));
  }
};

export { createBanner, updateBanner, deleteBanner, getBannerById, getAllBanner };
