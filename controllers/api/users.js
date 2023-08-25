const create = (req, res) => {
  // Baby step...
  console.log("Hello");
  res.json({
    user: {
      name: req.body.name,
      email: req.body.email,
    },
  });
};

module.exports = { create };
