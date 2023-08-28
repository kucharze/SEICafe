const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcrypt");

const create = async (req, res) => {
  // Baby step...
  console.log("Body: ", req.body);
  // res.json(req.body);

  try {
    const user = await User.create(req.body);
    const token = createJWT(user);

    console.log("token printing");
    res.json(token);
  } catch (error) {
    // console.log(error);
    res.status(400).json(error);
  }
};

const signIn = async (req, res) => {
  try {
    console.log("Body for login", req.body);

    const user = await User.findOne({ email: req.body.email });
    console.log("Did we find one??", user);

    if (!user) {
      //Did not find a user
      console.log("No user found");
      res.status(400).json(error);
    }
    const match = await bycrypt.compare(req.body.password, user.password);
    console.log("match is ", match);

    if (match) {
      console.log("Good sign in");
      const token = createJWT(user);
      res.json(token);
    } else {
      console.log("Bad sign in");
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    // res.json("Bad sign in");
  } catch (error) {
    res.status(400).json(error);
  }
};

function createJWT(user) {
  return jwt.sign(
    //datapayload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = { create, signIn };
