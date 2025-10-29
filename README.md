<h1 align="center">Car Shop</h1>

Car Shop é uma *API Rest* que consulta o banco de dados não relacional MongoDB através do *ODM* Mongoose.

Esta API é um *CRUD* feito com os princípios da *Programação Orientada á Objetos (POO)* e seu propósito é simular o gerenciamento de um sistema de uma concessionária de veículos.

Este projeto foi desenvolvido em **Node.js + Express.js + TypeScript**, utilizando **Mongoose.js** para comunicação com o banco de dados **MongoDB**. Além disso, foram realizados testes nas camadas *Model, Controller e Service* com **Mocha + Chai + Sinon**.

## Como eu faço para executar este projeto?
Primeiro de tudo, clone o projeto na sua máquina local e entre na pasta do projeto:
```bash
git clone git@github.com:Adolligit/car-shop.git && cd ./car-shop
```
Depois instale as dependências:
```bash
npm install
```
### Instalação
🚨 As versões descritas nas instalações são **fortemente recomendadas**. No entanto, caso queira tentar em uma versão diferente, considere a possível aparição de erros durante a execução do projeto.

Escolha abaixo um tipo de instalação:
<details>
  <summary>Instalar com Docker 🐳</summary>
</br><b>Requisitos</b>
</br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>Docker: v24.0.2</li>
    <li>Docker Compose: v2.19.0</li>
</ul>

  ⚠️ Se você estiver usando **Linux**, desative o **MongoDB** localmente para evitar conflitos de porta:
  ```bash
  systemctl stop mongod
  ```

<hr>

  1. Crie e inicie os contêiners:
  ```bash
  docker compose up -d
  ```
  2. Entre no contêiner da aplicação:
  ```bash
  docker exec -it car_shop bash
  ```
  ---
</details>

<details>
  <summary>Instalar localmente 💻</summary>
</br><b>Requisitos</b>
</br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>npm: v9.6.7</li>
    <li>Node: v20.3</li>
    <li>MongoDB: v6.0</li>
</ul>

Se você usa **Linux**, verifique se o serviço do **MongoDB** esta ativo: 
```bash
systemctl status mongod
```
Caso esteja desativado, substitua **status** por **start** no comando acima.
<hr>

1. Crie o arquivo <b>.env</b> na pasta raiz
```bash
touch .env
```

2. Copie e cole as informações a seguir:

```bash
# MongoDB
MDB_URI=
MDB_HOST=127.0.0.1
MDB_PORT=27017
MDB_NAME=CarShop

# API
API_PORT=3001
```
> 🗣️(Dica): Você pode conectar a aplicação com um banco remoto, adicionado a URI do banco em **MDB_URI**.

<hr>
</details>

### Execução
⚠️ Os comandos a seguir podem ser executados dentro do Container ou localmente.

Iniciar o projeto em modo de desenvolvimento (com **nodemon**):
```bash
npm run dev
```

Executar a cobertura de testes:
```bash
npm run test:dev
```

Executa os testes e depois criar a pasta **./coverage** que contém um relatório:
```bash
npm run test:coverage
```
> 🗣️(Dica): Utilizando a extensão **Live Server** no Visual Studio Code, você poderá visualizar a página com o relatório navegando até pasta criada e abrindo o arquivo **index.html** no navegador.

Executar o **ESLint** para verificar os erros do código estático:
```bash
npm run lint
```

## Testando o CRUD
Você pode utilizar qualquer Client API para testar o Car Shop, contudo, eu disponibilizei a documentação com OpenAPI (Swagger) para que você saiba quais rotas existem dentro do projeto e como testa-las.

Desta forma, quando a API estiver em execução, você poderá visitar http://127.0.0.1:3001/v1/docs/ e visualizar a página da documentação e testar a API.

<img align="center" alt="NodeJs" src="https://raw.githubusercontent.com/Adolligit/car-shop/main/img/ss1.png">

> 🗣️(Dica): O banco de dados não esta populado. Portanto é uma boa ideia começar cadastrando os dados.

##  Linguagens e ferramentas:
<div>
    <a href="https://nodejs.org/en/"><img align="center" alt="NodeJs" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></a>
    <a href="https://expressjs.com/pt-br/"><img align="center" alt="Express" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"></a>
    <a href="https://www.typescriptlang.org/"><img align="center" alt="TypeScript" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"></a>
    <a href="https://mongoosejs.com/"><img align="center" alt="Mongoose" height="40" width="50" src="https://avatars.githubusercontent.com/u/7552965?s=280&v=4"></a>
    <a href="https://www.mongodb.com/"><img align="center" alt="Mongo" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"></a>
    <a href="https://mochajs.org/"><img align="center" alt="Mocha" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"></a>
    <a href="https://www.chaijs.com/"><img align="center" alt="Chai" height="40" width="50" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/chaijs_logo_icon_168435.png"></a>
    <a href="https://sinonjs.org/"><img align="center" alt="Sinon" height="40" width="50" src="https://avatars.githubusercontent.com/u/6570253?s=280&v=4"></a>
</div>
