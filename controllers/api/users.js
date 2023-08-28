const userModel = require("../../models/User");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  // Baby step...
  console.log("Body: ", req.body);
  // res.json(req.body);

  try {
    const user = await User.create(req.body);
  } catch (error) {
    res.status(400).jdon(err);
  }
};

module.exports = { create };
