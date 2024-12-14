const FormData = require('../models/FormDataSchema');

// Controller para submeter o formulário
exports.submitForm = async (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Validação simples dos dados
  if (!nome || !email || !mensagem) {
    return res.status(400).send({ message: 'Todos os campos são obrigatórios!' });
  }

  try {
    // Criação do novo objeto FormData
    const newFormData = new FormData({ nome, email, mensagem });

    // Salvar os dados no MongoDB
    await newFormData.save();

    res.status(200).send({ message: 'Dados recebidos e salvos com sucesso!' });
  } catch (err) {
    console.error(err); // Para debugar o erro no servidor
    res.status(500).send({ message: 'Erro ao salvar dados', error: err });
  }
};

// Controller para exibir os dados (index)
exports.index = async (req, res) => {
  try {
    const formData = await FormData.find(); // Pega todos os dados do banco
    res.status(200).send(formData);
  } catch (err) {
    console.error(err); // Para debugar o erro no servidor
    res.status(500).send({ message: 'Erro ao buscar dados', error: err });
  }
};
