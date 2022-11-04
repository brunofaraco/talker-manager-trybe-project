const express = require('express');
const bodyParser = require('body-parser');

const readFile = require('../helpers/readFile');

const app = express();
app.use(bodyParser.json());

const talkerRouter = async (_req, res) => {
  const data = await readFile();
  res.status(200).json(data);
};

module.exports = talkerRouter;