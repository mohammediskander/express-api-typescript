### TODO

- [ ] Middlewares
  - [ ] Morgan
  - [ ] Helmet
  - [x] Cors
  - [x] BodyParser
  - [ ] Passport
- [ ] Setup Routes
  - [ ] Route Middlewares
    - [ ] Log
    - [ ] Validation
    - [ ] Authentication
    - [ ] Authorization
    - [x] Error
  - [ ] Function
    - [ ] System Initialization
    - [ ] Error Handler
- [ ] Utils
  - [x] Translation
  - [ ] Validation
  - [x] Routes

### Structure

dist - Typescript output
src
|-- @utils - utilites
| |-- routes.ts - router utility, a Class to configure routers based on array of objects.
| |-- translation.ts - translation utility, a Class to handle the translation of common response, usually used to handle Error response messages.
| |-- validation.ts - validation utility, a class to handle the validation of the request params, it may need to be updated!
|-- app
| |-- locales - translation locales for translation utility.
| |-- routes - routes tree of function, it may need to be updated!
| index.ts - express app configuration
|-- config
| |-- index.ts - combine of all configurations
| |-- keys.ts - keys that should be hidden here from outsiders, this should be moved to .env at production.
index.ts - express app creation.
