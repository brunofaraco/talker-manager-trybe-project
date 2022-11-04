const express = require('express');
const readFile = require('../helpers/readFile');

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

// router.post('/', () => {});

module.exports = router;