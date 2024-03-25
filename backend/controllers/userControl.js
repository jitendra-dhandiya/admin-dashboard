import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";


export const registerUser = async (req, resp) => {
  try {
    const data = await req.body;
    const {
      username,
      email,
      password,
    } = data;
    // Check User Name
    const checkUsername = await userModel.findOne({ username });
    if (checkUsername) {
      return resp.status(409).json({ error: "Username Already Exists" });
    }
    // Check User Email
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
      return resp.status(409).json({ error: "Email Already Exists" });
    }
    // Bcrypt Password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password,salt);
    // Then Create User
    const cUser = await userModel.create({
      username,
      password: hashPassword,
      email,
    });
    const saveUser = await cUser.save();

    return resp.status(201).json({
      message: "User Created Successfully",
      success:true,
      user:saveUser
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, resp) => {
  try {
    const data = await req.body;
    const { username, password } = data;
    // Check the Username
    const checkUsername = await userModel.findOne({ username });
    if (!checkUsername) {
      return resp.status(401).json({ error: "Username Doesn't Exists" });
    }
    // Compare the User Password
    const isMatch = await bcryptjs.compare(password, checkUsername.password);
    if (!isMatch) {
      return resp.status(401).json({ error: "Invalid Credentials" });
    }
    return (resp
      .status(200)
      .json({
        message: "Login Successfull",
        success: true,
        user:checkUsername
      }));
  } catch (error) {
    console.log(error);
  }
};
