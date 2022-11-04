const validateRateIfExist = (req, res, next) => {
  const { rate } = req.body.talk;
  if (!rate && rate !== 0) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  
  next();
};

const validateRateIsInteger = (req, res, next) => {
  const { rate } = req.body.talk;
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = { validateRateIfExist, validateRateIsInteger };