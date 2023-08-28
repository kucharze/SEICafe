const User = require("../../models/User");
const jwt = require("jsonwebtoken");

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
    console.log(error);
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

module.exports = { create };
