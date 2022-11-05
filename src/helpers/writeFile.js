const fs = require('fs').promises;

const path = require('path');

const readFile = require('./readFile');

const filePath = path.resolve(__dirname, '..', 'talker.json');

const writeFile = async (newTalker) => {
  const talkers = await readFile();

  const updatedTalkers = JSON.stringify([...talkers, newTalker]);
  
  await fs.writeFile(filePath, updatedTalkers);
};

module.exports = writeFile;