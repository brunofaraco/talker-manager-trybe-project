const fs = require('fs').promises;

const path = require('path');

const filePath = path.resolve(__dirname, '..', 'talker.json');

const writeFile = async (newTalkers) => {
  const updatedTalkers = JSON.stringify(newTalkers);

  await fs.writeFile(filePath, updatedTalkers);
};

module.exports = writeFile;