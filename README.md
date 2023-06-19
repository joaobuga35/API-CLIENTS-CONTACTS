<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Descrição

API voltada para o cadastro de clientes e seus possíveis contatos. Podendo ser utilizada em qualquer modelo de negócio com rede de contatos. 

## Instalação

```bash
$ npm install
```
  
## Variáveis de ambiente
  Crie um arquivo .env e complete com suas informações conforme esta no .env.example.

## Rodar aplicação localmente

```bash
#migrate
$ npx prisma migrate dev
#generate
$ npx prisma generate

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Documentação 
Acesse o link: https://project-full-stack-jj.onrender.com/api
- A documentação da API também pode ser importada para o Insomnia utilizando o arquivo JSON fornecido. O arquivo está localizado em insomnia.json. Importe o arquivo JSON para o Insomnia para obter a documentação completa das rotas e endpoints da API.

- O back-end estará disponível na porta 3001.

- Agora você pode acessar o projeto em seu navegador em http://localhost:3000 (para o client) e http://localhost:3001 (para o servidor), respectivamente.
