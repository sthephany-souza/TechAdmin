# TechAdmin
## Gerenciamento de equipamentos

Este projeto é uma aplicação web full stack, utilizando *React*, *Node.js* e *MongoDB*.

## 🚀 Funcionalidades
- Login e autenticação com JWT  
- Cadastro e gerenciamento de usuários  
- Banco de dados conectado ao MongoDB  

## 🛠️ Tecnologias usadas

### Front-end
- React.js
- React Router DOM  
- Axios

### Back-end
- Node.js
- Express
- Mongoose
- JWT (Json Web Token)
- Bcrypt (para criptografia de senha)

### Banco de dados
- MongoDB (Atlas ou local)

## ⚙️ Como executar

1. Clone este repositório
   ```bash
   git clone https://github.com/seuusuario/nome-do-projeto.git
   
2. Rode npm install
   1. Back-end
      ```bash
      cd backend
      npm install
    2. Front-end
       ```bash
       cd frontend
       npm install

3. Crie um arquivo .env no back-end
   ```bash
   PORT=3000
   MONGO_URI=sua_string_de_conexao
   JWT_SECRET=seu_token_secreto

4. Execute npm
   1. Back-end
      ```bash
      cd backend
      npm start
      
   2. Front-end
      ```bash
      cd frontend
      npm run dev

5. Acesse no navegador <br>
   http://localhost:5173 (ou a porta configurada no front)
