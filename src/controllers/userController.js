import User from "../Models/userModel.js"
export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};
