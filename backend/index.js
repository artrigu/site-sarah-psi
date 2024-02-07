const express = require('express');
const app = express();
// Importe o roteador de login
const loginRouter = require('./login');

// Rota para autenticação de pacientes
app.post('/login', (req, res) => {
    // Lógica para autenticar o usuário
    // Retorna um token de acesso ou uma mensagem de erro
  });

  // Use o roteador para a rota de login
app.use(loginRouter);
  
  // Rota para listar boletos do paciente
  app.get('/pacientes/:id/boletos', (req, res) => {
    // Lógica para buscar boletos do paciente com o ID fornecido
    // Retorna os boletos em formato JSON
  });
  
  // Rota para agendar pacientes
  app.post('/agendamentos', (req, res) => {
    // Lógica para agendar um paciente
    // Recebe os dados do paciente e retorna uma confirmação
  });

  const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
