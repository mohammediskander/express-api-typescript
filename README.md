### Getting Started

clone repository
open the repository in the terminal
run `npm install` or `yarn`

Start coding routes in the `src/app/routes` folder. This project folows CRUD operation convension, so it is recomended to start by add a folder to the controller that you want to setup.

#### DotENV

copy the content of `.env.example` to `.env` and update its content

#### MongoDB

to be able to use MongoDB (and run the project without any errors) copy the content of the file `src/config/keys.example.ts` to `src/config/keys.ts` and update its content.

#### Route Controller Structure

### TODO

- [x] Middlewares
  - [x] Morgan
  - [x] Helmet
  - [x] Cors
  - [x] BodyParser
  - [x] Passport
- [x] Setup Routes
  - [x] Route Middlewares
    - [x] Log
    - [x] Authentication
    - [x] Authorization
    - [x] Error
  - [x] Function
    - [x] Error Handler
  - [x] Static Routes
    - [x] 404 Not Found
- [x] Utils
  - [x] Translation
  - [x] Routes
