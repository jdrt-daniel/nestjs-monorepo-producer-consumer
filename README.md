<p align="center">
  <a href="http://nestjs.com/" target="blank">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" />
  </a>
  
  <a href="https://www.rabbitmq.com/" target="blank">
  <img src="https://www.rabbitmq.com/img/rabbitmq-logo.svg" width="80" alt="Nest Logo" /></a>
</p>


## Description

Nestjs + Rabbitmq monorepo project with producer and consumer

## Installation
1. Run command
```bash
npm install
```
2. Copy ```.env-example``` and rename file to ```.env```
3. Configure your environments variables

```bash
PORT=4000

RMQ_HOST=
RMQ_PORT=

```

## Running the app

1. Execute docker command ```docker compose up -d``` for mount Rabbitmq broker server

2. Run command

```bash
# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```
3. Rabbitmq Panel for check Queues ```http://localhost:15672/```, user: guest, pass: guest