const readFile = require('./readFile');

const newID = async () => {
  const talkers = await readFile();
  const higherId = Math.max(...talkers.map((talker) => talker.id));
  return higherId + 1;
};

module.exports = newID;