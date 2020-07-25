/** @format */

import User from "../model/User";

const createUser = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (user) {
      return res.status(500).json({errMsg:`${email} is registered so Please login`})
    }
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(200).json(newUser)

  } catch (err) {
    console.log('err :>> ', err);
    return res.status(400).json({errMsg: 'Registration failed from server'})
  }
  res.json(newUser)
};

export default { createUser };
