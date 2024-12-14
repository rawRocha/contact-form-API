const mongoose = require('mongoose');

// Definindo o esquema com validações
const FormDataSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'Nome é obrigatório'], // Garantir que nome não seja vazio
    },
    email: {
      type: String,
      required: [true, 'Email é obrigatório'], // Garantir que email não seja vazio
      unique: true, // Garante que o email seja único (evita duplicação no banco)
      match: [/\S+@\S+\.\S+/, 'Por favor, forneça um email válido'], // Expressão regular para validar o formato do email
    },
    mensagem: {
      type: String,
      required: [true, 'Mensagem é obrigatória'], // Garantir que mensagem não seja vazia
    },
  },
  {
    timestamps: true, // Adiciona campos `createdAt` e `updatedAt`
  },
);

// Criando o modelo a partir do esquema
const FormDataModel = mongoose.model('FormData', FormDataSchema);

module.exports = FormDataModel;
