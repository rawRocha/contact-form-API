require('dotenv').config();

//importar pacotes
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./src/routes/route');

//configurar o app
const app = express();

app.use(
  cors({
    origin: 'http://127.0.0.1:5500', // Substitua pela URL do frontend
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Se for usar cookies ou autenticação
  }),
);

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
