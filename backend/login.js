const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Lógica para autenticar o usuário
    const { username, password } = req.body;
  
    // Exemplo de autenticação simples (não seguro)
    if (username === 'user' && password === 'password') {
      res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  });
  
  module.exports = router;
