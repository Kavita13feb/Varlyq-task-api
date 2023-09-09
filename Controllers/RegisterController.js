const { UserModel } = require("../Models/UsersModel");
const bcrypt = require('bcrypt');


const RegisterController=async (req, res) => {
  const { name, email, password , mobile} = req.body;
  try {
      const userExist = await UserModel.findOne({ email });
      if (!userExist) {
          bcrypt.hash(password, 4, async (err, hash) => {
              if (err) {
                  res.status(400).send({ "msg": err.message });
              }
              else {
                  const newUser = new UserModel({ name, email, password: hash, mobile });
                  await newUser.save();
                  res.status(200).send({ "msg": "Registration Successfull !!" });
              }
          });
      }
      else {
          res.status(400).send({ "msg": "User already exists. Please login." });
      }
  } catch (error) {
      res.status(400).send({ "msg": error.message });
  }
}

  module.exports={
    RegisterController
  }