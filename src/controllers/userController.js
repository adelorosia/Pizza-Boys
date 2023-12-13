import User from "../Models/userModel.js"
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export const createUser = async (req, res) => {
  const {firstName,lastName,email,password}=req.body
  try {
     await User.create({
      firstName,lastName,email,password
     })
     res.json("successfully");
  } catch (error) {
    res.json(error);
  }
};
