const express = require('express');
const bodyParser = require('body-parser');

const { talkerRouter, talkerRouterById } = require('./routes/talkerRouter');
const { loginRouter } = require('./routes/loginRouter');

const { validateEmail, validatePassword } = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', talkerRouter);

app.get('/talker/:id', talkerRouterById);

app.post('/login', validateEmail, validatePassword, loginRouter);