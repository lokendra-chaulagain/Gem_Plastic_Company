import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import EmailToken from "../models/EmailToken.js";
// import sendEmail from "../utils/sendEmail.js";

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, envSecretKey, (err, payload) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized" });
      } else {
        res.json({ email: payload.email });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

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
        fullName: req.body.fullName,
        email: req.body.email,
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

// const registerUser = async (req, res) => {
//   try {
//     let user = await User.findOne({ email: req.body.email });
//     if (user) {
//       res.status(409).json({
//         error: true,
//         message: "User already exist with this Email",
//       });
//     } else {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(req.body.password, salt);

//       const createdUser = await new User({
//         fullName: req.body.fullName,
//         email: req.body.email,
//         password: hashedPassword,
//       }).save();

//       const token = await new EmailToken({
//         userId: createdUser._id,
//         token: crypto.randomBytes(32).toString("hex"),
//       }).save();
//       const url = `${process.env.BASE_URL}/users/${createdUser._id}/verify/${token.token}`;
//       await sendEmail(createdUser.email, "Verify Email", url);

//       const { password, ...data } = createdUser.toJSON();
//       res.status(201).json({ message: "Email sent to your account please verify", data });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const verifiedPassword = await bcrypt.compare(req.body.password, user.password);

      if (verifiedPassword) {
        const accessToken = jwt.sign({ id: user.id, role: user.role }, "envSecretKey", { expiresIn: "30s" });
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
  console.log(authHeader);

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

//verify email route

// const emailVerifyRoute = async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.params.id });
//     if (!user) return res.status(400).send({ message: "Invalid link" });

//     const token = await EmailToken.findOne({
//       userId: user._id,
//       token: req.params.token,
//     });
//     if (!token) return res.status(400).send({ message: "Invalid link" });

//     await User.updateOne({ _id: user._id, verified: true });
//     await token.remove();

//     res.status(200).send({ message: "Email verified successfully" });
//   } catch (error) {
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// };

export { registerUser, loginUser, deleteUser, logoutUser, getUser };
