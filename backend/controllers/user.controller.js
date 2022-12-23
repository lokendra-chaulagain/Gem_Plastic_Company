import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(409).json({
        error: true,
        message: "User already exist with this Email",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const user = new User({
        email: req.body.email,
        role: req.body.role,
        password: hashedPassword,
      });

      const createdUser = await user.save();
      const { password, ...data } = createdUser.toJSON();
      res.status(201).json({ message: "User has been Created", data });
    }
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const verifiedPassword = await bcrypt.compare(req.body.password, user.password);

      if (verifiedPassword) {
        const accessToken = jwt.sign({ id: user.id, role: user.role }, "envSecretKey");
        //  { expiresIn: "30s" }
        res.json({
          // ...user,
          id: user._id,
          email: user.email,
          role: user.role,
          accessToken,
        });
      } else {
        return res.status(401).json({ error: true, message: "Invalid Credentials" });
      }
    } else {
      return res.status(401).json({ error: true, message: "User does not Exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "USer dont exist so you cant delete" });
    }

    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted Successful", deletedUser });
  } catch (error) {
    console.log(error);
  }
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)

  if (authHeader) {
    // const token = authHeader.split(" ")[1];

    jwt.verify(authHeader, "envSecretKey", (error, user) => {
      if (error) {
        return res.status(403).json("Token not valid !");
      }
      // if everything is okay
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const logoutUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, loginUser, deleteUser, logoutUser, verifyToken };
