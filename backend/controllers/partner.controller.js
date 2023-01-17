import Partner from "../models/Partner.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createPartner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Partner(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Partner !"));
  }
};

const updatePartner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Partner.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Partner !"));
  }
};

const deletePartner = async (req, res, next) => {
  try {
    const deletedService = await Partner.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Partner !"));
  }
};

const getPartnerById = async (req, res, next) => {
  try {
    const singleService = await Partner.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Partner by Id !"));
  }
};

const getAllPartner = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";

  const query = {
    title: { $regex: search, $options: "i" },
  };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = (page - 1) * size;

    const totalPartnerCount = await Partner.countDocuments();
    const allPartner = await Partner.find(query)
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    res.status(200).json({ totalPartnerCount, allPartner });
  } catch (error) {
    return next(createError(500, "Server Error while getting all Partner !"));
  }
};

export { createPartner, updatePartner, deletePartner, getPartnerById, getAllPartner };
