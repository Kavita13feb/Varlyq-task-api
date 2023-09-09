const bcrypt = require('bcrypt');
const { UserModel } = require('../Models/UsersModel');

const LoginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "Login Successful !!","name": user.name ,"token": jwt.sign({ "userID": user._id }, "my_signature") });
                }
                else {
                    res.status(400).send({ "msg": "Wrong password !!" });
                }
            })
        } else {
            res.status(400).send({ "msg": "User not found, Please Check your email !!" });
        }
    } catch (error) {
        res.status(400).send({ "msg": error.message });
    }
}

module.exports={
    LoginController
}