const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

const mutation = {
  async signup(parent, { username, password }, context) {
    const userExist = await User.find({ username });
    if (userExist) throw new Error("User already exists");

    const hash = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      password: hash,
    });

    const createdUser = await user.save();

    const token = jwt.sign(
      { username, userId: createdUser.id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    console.log({
      token,
      user,
    });

    return {
      token,
      user,
    };
  },

  async signin(parent, { username, password }, context) {
    const userExist = await User.findOne({ username });
    if (!userExist) throw new Error("No user found!");

    const isPwMacth = bcrypt.compare(password, userExist.password);

    if (isPwMacth) throw new Error("Incorrect password!");

    const token = jwt.sign(
      { username, userId: createdUser.id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    return {
      token,
      user,
    };
  },
};

module.exports = mutation;
