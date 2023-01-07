# Angular Bank

Bank APP coded in Angular CLI version 12.2.9. This application uses the GET, POST, PUT and DELETE methods while being connected to a mock JSON server

## What can the APP make?
- It' possible to create a database of clients with each one's name, address, telephone and account properties (POST method)
- You can update your clients information (PUT method)
- You can delete your clients (DELETE method)
- It's possible to see the whole list of clients (GET method)


## Watch out!
- The UI and UX are still under development

## Bootstrap

We strongly recommend adding the ng-bootstrap library to the project.

Just run the following:

`ng add @ng-bootstrap/ng-bootstrap`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Mock Server ( database / backend )
Install the JSON-server globally using the following npm command:

`npm install -g json-server`

Start the server:

`json-server --watch db.json`

