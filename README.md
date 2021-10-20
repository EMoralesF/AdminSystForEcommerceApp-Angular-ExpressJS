# Demo sistema de administración para aplicación E-Commerce
Aplicación web desarrollada con Node.js, Angular y MySQL
Maquetación vía Bootstrap 4

## Requisitos:
* Angular CLI
* Node y NPM
* MySQL
* Otros módulos: JWT

## Pasos para su ejecución:
1. Clonar o descargar repositorio. En la terminal navegar a la carpeta del proyecto y ejecutar ``npm install`` para instalar las dependencias de Angular y los módulos necesarios lado del cliente.
2. En otra terminal navegar a la carpeta **api** y ejecutar también: ``npm install``
3. Crear archivo **.env** a partir de **.env.example** o usar el archivo **.env** por defecto (dentro de **api**). De usarse este último se deben usar las mismas credenciales en la BBDD y en el archivo de conexión de la carpeta **api**.
4. Crear base de datos y usuario en MySQ
5. Importar **esquema.sql** a la base de datos recién creada.
6. Recuerda cambiar credenciales de la base de datos en **.env** (dentro de **api**)
7. En la carpeta raíz del proyecto ejecutar ``ng serve``
8. Abrir otra terminal y dentro de **api** ejecutar ``node index.js``
9. Navegar a localhost:4200

# Créditos
Imagen de "Gracias por su compra" pertenece a http://www.freepik.com

# AdminSystemforECommerceApp-Angular-Node

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
