# pocs-backend

## 1. Clone this repository

    git clone https://github.com/sustentabee/pocs-backend.git my-project

## 2. Install dependencies

    cd my-project
    yarn

## 3. Edit .env file

    DB_HOST=YOUR_DB_HOST
    DB_NAME=YOUR_DB_NAME
    DB_USER=YOUR_DB_USER
    DB_PASSWORD=YOUR_DB_PASSWORD

## 4. Run migrations

    yarn knex migrate:latest

## 5. Run application

    yarn start

## 6. Open app

    http://localhost:3333