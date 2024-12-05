## UNISENAI - Análise e Desenvolvimento de Sistemas<br>

## PROJETO APLICADO 3 - 2024-2<br>

- Antonio Hebert Mendonça dos Santos
- Eric Lucca Naves Felipe
- Jônatas Fred Rossetto
- Joseli Divino

# Backend de um aplicativo para Gerenciamento de Treinamentos <br>

Neste documento

- Sobre o aplicativo
- Arquitetura do aplicativo
- Stack
- Instruções para execução

## Sobre o aplicativo

O aplicativo será utilizado para a gestão de treinamentos.
Este repositório se refere ao backend do aplicativo.

## Arquitetura do aplicativo

- O aplicativo é estruturado em três camadas principais, uma camada de front-end, uma camada de back-end e uma camada de persistência.<br>
- A camada de front-end foi desenvolvida como uma SPA (Single Page Application) utilizando o framework Angular, com NodeJs e TypeScript, o design das telas foi implementado utilizando-se a biblioteca de componentes Bootstrap. O front-end se comunica com a api rest do back-end através de requisições http com autorização concedida por um token JWT fornecido pelo back-end no momento do login.<br>
- A camada de back-end foi desenvolvida em Node com auxílio do framework NestJs para implementação dos end-points REST que realizam as operações do sistema. A autorização de acesso aos end-points é realizada através da validadação de um token JWT. O acesso via CORS está habilitado até a finalização dos teste. O Prisma ORM é utilizado para a comunicação com a camada de persistência. O gerenciador de dependências é o Npm.<br>
- A camada de persistência é implementada com o MySql, um sistema gerenciador de banco de dados relacional.<br>

## Backend Stack:

- IDE Vscode >2023-09
- npm
- Nodejs v22.11.0
- Nestjs 10.4.8
- Prisma 6.0.1
- MySql com o Workbench 8.0
- JWT
- Postman

## Instruções para execução do backend

- Baixar ou clonar este repositório.

- Na pasta principal adicionar o arquivo .env com o conteúdo abaixo (lembre de alterar o login e senha, no meu caso root:1234, para os dados do seu servidor mysql)

DATABASE_URL='mysql://root:1234@localhost:3306/sgt'

### Back-end

- Utilizando o MySql Workbench, executar o script createTables.sql (para criar o esquema de tabelas)
- Utilizando o MySql Workbench, executar o script sampleData.sql (para popular as tabelas)
- No prompt de comando executar: npm install
- No prompt de comando executar: npx prisma generate
- No prompt de comando executar: npm start 
- Para testar, no navegador acesse http://localhost:3000/user 

### Esquema do Postman para teste dos endpoints

- O esquema de testes dos endpoints utilizando o Postman está no arquivo: SGT REST API.postman_collection.json


