<h1 align="center">Car Shop</h1>

Car Shop é uma *API Rest* que consulta o banco de dados não relacional MongoDB através do *ODM* Mongoose.

Esta API é um *CRUD* feito com os princípios da *Programação Orientada á Objetos (POO)* e seu propósito é simular o gerenciamento de um sistema de uma concessionária de veículos.

Este projeto foi desenvolvido em **Node.js + Express.js + TypeScript**, utilizando **Mongoose.js** para comunicação com o banco de dados **MongoDB**. Além disso, foram realizados testes nas camadas *Model, Controller e Service* com **Mocha + Chai + Sinon**.

## Como eu faço para testar?
⚠️ Você deve possuir o **MongoDB** instalado para prosseguir com os próximos passos. ⚠️

👇 Se já possui ele instalado, clique em "**Instalação do Car Shop**". Caso contrário, siga o passo-a-passo, clicando em "**Eu não tenho MongoDB**".

<details>
<summary><b>Eu não tenho MongoDB</b></summary>

Existem muitos tipos de instalações diferentes onde cada uma corresponde á um respectivo sistema operacional.

Clicando no link do com o nome do seu sistema operacional, você será direcionado para um tutorial da própria documentação do MongoDB.

[![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)](https://www.mongodb.com/docs/manual/administration/install-on-linux/) [![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) [![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)

Depois disso, siga com a instalação do **Car Shop**.
</details>

<details>
<summary><b>Instalação do Car Shop</b></summary>

Clone o repositório na sua máquina local:
```bash
git clone git@github.com:Adolligit/car-shop.git
```

Entre na pasta **/car-shop** e instale as dependências:
```bash
cd /car-shop

npm install
```

Inicie a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

</details>
