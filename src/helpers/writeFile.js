const fs = require('fs').promises;

const path = require('path');

const readFile = require('./readFile');

const filePath = path.resolve(__dirname, '..', 'talker.json');

const writeFile = async (newTalker) => {
  const talkers = await readFile();
  const doTalkerExists = talkers.find((talker) => talker.id === newTalker.id);

  if (!doTalkerExists) {
    const updatedTalkers = JSON.stringify([...talkers, newTalker]);
    
    await fs.writeFile(filePath, updatedTalkers);
  } else {
    const idToBeModified = talkers.findIndex((talker) => talker.id === newTalker.id);
    talkers[idToBeModified] = newTalker;
    const updateSpecificTalker = JSON.stringify(talkers);

    await fs.writeFile(filePath, updateSpecificTalker);
  }
};

module.exports = writeFile;