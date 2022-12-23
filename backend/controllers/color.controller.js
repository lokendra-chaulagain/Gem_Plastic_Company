import Color from "../models/Color.js";
import createError from "../utils/error.js";

const createColor = async (req, res, next) => {
  try {
    const newService = new Color(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Color !"));
  }
};

const updateColor = async (req, res, next) => {
  try {
    const updatedService = await Color.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Color !"));
  }
};

const deleteColor = async (req, res, next) => {
  try {
    const deletedService = await Color.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Color !"));
  }
};

const getColorById = async (req, res, next) => {
  try {
    const singleService = await Color.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Color by Id !"));
  }
};

const getAllColor = async (req, res, next) => {
  try {
    const allService = await Color.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Color !"));
  }
};

export { createColor, updateColor, deleteColor, getColorById, getAllColor };
