const express = require('express');
const tokenGenerator = require('../helpers/tokenGenerator');
const { validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validateEmail,
  validatePassword,
  async (req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token });
},
);

module.exports = router;