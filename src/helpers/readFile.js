const fs = require('fs').promises;

const path = require('path');

const filePath = path.resolve(__dirname, '..', 'talker.json');

const readFile = async () => {
  const talkers = await fs.readFile(filePath);
  const response = JSON.parse(talkers);
  return response;
};

module.exports = readFile;