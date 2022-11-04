const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const validateName = require('./validateName');
const validateAge = require('./validateAge');
const validateTalk = require('./validateTalk');
const validateWatchedAt = require('./validateWatchedAt');
const { validateRateIfExist, validateRateIsInteger } = require('./validateRate');

module.exports = {
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateIfExist,
  validateRateIsInteger,
};