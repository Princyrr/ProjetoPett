# Projeto de Agendamento de Pet

Este projeto é um sistema de agendamento de serviços para pets, como banho e tosa, utilizando **React** no frontend e **Express** no backend.

## Descrição

Este sistema permite que os donos de pets agendem serviços como banho, tosa e outros para seus animais de estimação. O sistema possui um formulário no frontend onde o dono do pet insere seus dados, juntamente com o nome do pet, tipo de serviço e outros detalhes. As informações são enviadas para um servidor backend que salva o agendamento.

## Funcionalidades

- Cadastro de agendamentos para serviços de pets (banho, tosa, etc).
- Visualização dos agendamentos feitos.
- Exclusão de agendamentos.

## Tecnologias

### Frontend:
- **React** – Biblioteca JavaScript para construir interfaces de usuário.
- **Tailwind CSS** – Framework CSS para estilização rápida e responsiva.
- **Lucide React** – Conjunto de ícones React.

### Backend:
- **Node.js** – Ambiente de execução para JavaScript no backend.
- **Express** – Framework para criação de servidores web em Node.js.
- **CORS** – Middleware para permitir requisições de diferentes origens.
- **Body-Parser** – Middleware para analisar o corpo das requisições HTTP.

## Como Rodar o Projeto

### Pré-requisitos

Antes de rodar o projeto, você precisa ter o seguinte instalado:

- **Node.js** (versão 18 ou superior).
- **NPM** (gerenciador de pacotes).

### Rodando o Backend

1. Navegue até a pasta do backend (onde está o arquivo `server.js`) no terminal:

   ```bash
   cd backend


Instale as dependências:
npm install

Inicie o servidor:
npm start

**O backend estará rodando na porta 5000 por padrão, e você pode acessar as rotas da API em http://localhost:5000.**

Rodando o Frontend
Navegue até a pasta do frontend (onde está o projeto React):
cd frontend


Instale as dependências:
npm install

Inicie o servidor de desenvolvimento:
npm run dev

**O frontend estará disponível em http://localhost:3000.**

Endpoints da API

GET /appointments: Retorna todos os agendamentos.
POST /appointments: Adiciona um novo agendamento.
DELETE /appointments/:id: Exclui um agendamento pelo ID


