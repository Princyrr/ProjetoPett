import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

// Middleware para permitir requisições de diferentes origens
app.use(cors());

// Middleware para analisar o corpo das requisições em formato JSON
app.use(bodyParser.json());

let appointments = []; // Lista de agendamentos, normalmente seria um banco de dados

// Rota para obter todos os agendamentos
app.get('/appointments', (req, res) => {
  res.json(appointments);
});

// Rota para adicionar um novo agendamento
app.post('/appointments', (req, res) => {
  const newAppointment = req.body;
  newAppointment.id = Date.now(); // Adiciona um ID único
  appointments.push(newAppointment);

  // Exibe o agendamento no terminal do Node.js
  console.log('Novo agendamento:', newAppointment);

  res.status(201).json(newAppointment);
});

// Rota para excluir um agendamento
app.delete('/appointments/:id', (req, res) => {
  const { id } = req.params;
  appointments = appointments.filter(app => app.id !== parseInt(id));
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
