const express = require('express');

const newID = require('../helpers/newID');
const readFile = require('../helpers/readFile');
const writeFile = require('../helpers/writeFile');

const { 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateIfExist,
  validateRateIsInteger,
} = require('../middlewares');

const router = express.Router();

router.get('/', async (_req, res) => {
  const data = await readFile();
  res.status(200).json(data);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const data = await readFile();
  const filteredData = data.find((talker) => talker.id === Number(id));
  
  if (!filteredData) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(filteredData);
});

router.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateIfExist,
  validateRateIsInteger,
  async (req, res) => {
    const data = req.body;
    const newTalker = { id: await newID(), ...data };
    await writeFile(newTalker);

    res.status(201).json(newTalker);
  },
);

router.put(
  '/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRateIfExist,
  validateRateIsInteger,
  async (req, res) => {
    const { id } = req.params;
    const updatedTalkerInfo = req.body;
    const updatedTalker = { id: Number(id), ...updatedTalkerInfo };
    await writeFile(updatedTalker);

    res.status(200).json(updatedTalker);
  },
  );

module.exports = router;
