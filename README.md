# Demo sistema de administración para aplicación E-Commerce
Aplicación web desarrollada con Node.js, Angular y MySQL.
Maquetación vía Bootstrap 4.

[![1-Tienda.png](https://i.postimg.cc/xdzVkRh3/1-Tienda.png)](https://postimg.cc/QBhywpXF)

## Requisitos:
* Angular CLI
* Node y NPM
* MySQL
* Otros: JWT

## Pasos para su ejecución:
1. Clonar o descargar. En la terminal navegar a la carpeta del proyecto y ejecutar ``npm install`` para instalar las dependencias de Angular y los módulos necesarios lado del cliente.
2. En otra terminal navegar a la carpeta **api** y ejecutar también: ``npm install``
3. Crear archivo **.env** a partir de **.env.example** o usar el archivo **.env** por defecto (dentro de **api**). De usarse este último se deben usar las mismas credenciales en la BBDD y en el archivo de conexión de la carpeta **api**.
4. Crear base de datos y usuario en MySQ
5. Importar **esquema.sql** a la base de datos recién creada.
6. Recuerda cambiar credenciales de la base de datos en **.env** (dentro de **api**)
7. En la carpeta raíz del proyecto ejecutar ``ng serve``
8. Abrir otra terminal y dentro de **api** ejecutar ``node index.js``
9. Navegar a localhost:4200

# Detalles del frontend:

Las vistas de la parte frontend se han desarrollado con Angular 11 y se ha maquetado con Bootstrap 4. Se
han utilizado también componentes de la librería Angular Material.

[![1-Tienda.png](https://i.postimg.cc/jjKGM7jz/1-Tienda.png)](https://postimg.cc/k2114DK4)

Se ha aplicado el routing a los componentes del menú: AdminLogin y tienda (Iniciar sesión y ver tienda en
las vistas). Mediante lazyload se cargarán las rutas hijas de AdminLogin.

[![5-Routing.png](https://i.postimg.cc/JhjK2rnZ/5-Routing.png)](https://postimg.cc/gwkvwP32)

Se accede al menú del administrador a través de AdminLogin, el administrador debe iniciar sesión. Se 
han aplicado funciones en el componente que permiten cambiar el maquetado del componente en función de 
si el administrador se encuentra o no registrado. Este registro a su vez se comprueba mediante JWT.

[![6-Formulario.png](https://i.postimg.cc/bJLqhjJF/6-Formulario.png)](https://postimg.cc/wytCXZDh)
[![7-admin-Login-component-p1.png](https://i.postimg.cc/C1KQRZSY/7-admin-Login-component-p1.png)](https://postimg.cc/hJHrwtX3)
[![7-admin-Login-component-p2.png](https://i.postimg.cc/SsttCyx9/7-admin-Login-component-p2.png)](https://postimg.cc/Q91brZ5N)

Desde el menú del administrador se podrán realizar algunas funciones que permitan la gestión de la web. Se
muestran las rutas hijas de AdminLogin a través del componente menú y su contenido mediante una nueva
etiqueta <router-outlet></router-outlet>.

[![4-Men-y-vistas-del-administrador.png](https://i.postimg.cc/jjLz08CK/4-Men-y-vistas-del-administrador.png)](https://postimg.cc/PLnL1QmF)

Para añadir clientes y ventas al componente ventas se ha habilitado un carrito a través de servicios que 
envía los datos a la API de la parte backend. Esta API hará las consultas a la BBDD.

[![2-Carrito.png](https://i.postimg.cc/4NJFcgm3/2-Carrito.png)](https://postimg.cc/c6bmqP7q)

Se muestran algunas vistas del componente terminarCompra:

[![3-Terminar-compra-p1.png](https://i.postimg.cc/59HBj95J/3-Terminar-compra-p1.png)](https://postimg.cc/s1rQNr0H)
[![3-Terminar-compra-p2.png](https://i.postimg.cc/xCBbLHG2/3-Terminar-compra-p2.png)](https://postimg.cc/8JB5S7nK)
[![3-Terminar-compra-p3.png](https://i.postimg.cc/9QcwPc9r/3-Terminar-compra-p3.png)](https://postimg.cc/ykrNs4vH)

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
