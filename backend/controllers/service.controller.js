import Service from "../models/Service.js";
import createError from "../utils/error.js";

const createService = async (req, res, next) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Service !"));
  }
};

const updateService = async (req, res, next) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Service !"));
  }
};

const deleteService = async (req, res, next) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Service !"));
  }
};

const getServiceById = async (req, res, next) => {
  try {
    const singleService = await Service.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Service by Id !"));
  }
};

const getAllService = async (req, res, next) => {
  try {
    const allService = await Service.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Service !"));
  }
};

export { createService, updateService, deleteService, getServiceById, getAllService };
