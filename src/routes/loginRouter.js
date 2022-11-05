const express = require('express');
const { tokenGenerator } = require('../helpers');
const { validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validateEmail,
  validatePassword,
  (_req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token });
},
);

module.exports = router;