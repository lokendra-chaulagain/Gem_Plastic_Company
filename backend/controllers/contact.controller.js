import Contact from "../models/Contact.js";
import createError from "../utils/error.js";
import nodemailer from "nodemailer";

const createContact = async (req, res, next) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(200).json(savedContact);

    // Nodemailer email send start
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, //
      auth: {
        user: "lokendrachaulagain803@gmail.com",
        pass: "keodnnbwcunkxqmi",
      },
    });

    contactEmail.verify((error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Ready to Send");
      }
    });

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
      // from: name,
      to: "lokendrachaulagain803@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
    // Nodemailer email send end
  } catch (error) {
    return next(createError(500, "Server Error while creating contact !!!"));
  }
};

const updateContact = async (req, res, next) => {
  try {
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updateContact);
  } catch (error) {
    return next(createError(500, "Server Error while updating ccontact!!!"));
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedContact);
  } catch (error) {
    return next(createError(500, "Server Error while deleting contact !!!"));
  }
};

const getContactById = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (error) {
    return next(createError(500, "Server Error while getting Contact by Id !!!"));
  }
};

const getAllContact = async (req, res, next) => {
  const search = req.query.search || "";
  const sort = req.query.sort || "";

  const query = {
    email: { $regex: search, $options: "i" },
  };

  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = (page - 1) * size;

    const totalMailCount = await Contact.countDocuments();
    const allContact = await Contact.find(query)
      .skip(skip)
      .limit(size)
      .sort({ createdAt: sort == "latest" ? -1 : 1 });
    res.status(200).json({
      totalMailCount,
      allContact,
    });
  } catch (error) {
    return next(createError(500, "Server Error while getting all aboutUsContent !!!"));
  }
};

export { createContact, updateContact, deleteContact, getContactById, getAllContact };
