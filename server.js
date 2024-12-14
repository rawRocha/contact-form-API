require('dotenv').config();

//importar pacotes
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./src/routes/route');

//configurar o app
const app = express();
app.use(bodyParser.json());
app.use(routes);

const dbURI = process.env.CONNECTIONSTRING;

//conectar ao mongo
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectando ao MongoDB Atlas'))
  .catch((err) => console.log('Erro de Conexão', err));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
