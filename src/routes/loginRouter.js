const tokenGenerator = require('../helpers/tokenGenerator');

const loginRouter = async (req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token });
};

module.exports = {
  loginRouter,
};