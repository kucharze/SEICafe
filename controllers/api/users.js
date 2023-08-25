const create = (req, res) => {
  // Baby step...
  console.log("Body: ", req.body);
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
  });
};

module.exports = { create };
