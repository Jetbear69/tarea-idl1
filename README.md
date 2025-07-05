# Curso de Desarrollo de Sistemas de Información

## Proyecto NodeJS durante el curso

- Se ha implementado librerias para crear el proyecto de las cuales tiene que digitar lo siguiente en la terminal:

  - npm install express
  - npm install officegen
  - npm install pdfkit
  - npm install body-parser

## Contenido del Proyecto

- URL_BASE: **https://dsi-projectapinode-2512054.glitch.me**

#### Lista de EndPoints:

| EndPoint           | Method |    Descripción                         |
|--------------------|--------|----------------------------------------|
| /                  | GET    | Contenido de saludo                    |
| /health            | GET    | Contenido de mensaje de funcionamiento |
| /status            | GET    | Contenido de estado                    |
| /formato           | GET    | Contenido de datos XML                 |
| /informe_word      | GET    | Contenido en un archivo Word           |
| /informe_excel     | GET    | Contenido en un archivo Excel          |
| /informe_pdf       | GET    | Contenido en un archivo PDF            |
| /general           | GET    | Index General de Rutas                 |
| /general/acerca_de | GET    | Acerca de mi sitio web                 |

#### EndPoint para Productos

| EndPoint           | Method |    Descripción                         |
|--------------------|--------|----------------------------------------|
| /api/products      | GET    | Listar Productos                       |
| /api/products      | POST   | Crear Producto                         |

#### EndPoint para Clientes

| EndPoint           | Method |    Descripción                         |
|--------------------|--------|----------------------------------------|
| /api/customers     | POST   | Crear Producto                         |
| /api/customers/:id | PUT    | Actualizar Producto por ID             |
| /api/customers/:id | DELETE | Eliminar Producto por ID               |
| /api/customers     | GET    | Listar Producto                        |
| /api/customers/:id | GET    | Filtrar Producto por ID                |

#### EndPoint para Categorías

| EndPoint            | Method |    Descripción                         |
|---------------------|--------|----------------------------------------|
| /api/categories     | POST   | Crear Categoría                        |
| /api/categories/:id | PUT    | Actualizar Categoría por ID            |
| /api/categories/:id | DELETE | Eliminar Categoría por ID              |
| /api/categories     | GET    | Listar Categorías                      |
| /api/categories/:id | GET    | Filtrar Categoría por ID               |

#### EndPoint para Usuarios

| EndPoint       | Method |    Descripción                       |
|----------------|--------|--------------------------------------|
| /api/users     | POST   | Crear Usuario                        |
| /api/users/:id | PUT    | Actualizar Usuario por ID            |
| /api/users/:id | DELETE | Eliminar Usuario por ID              |
| /api/users     | GET    | Listar Usuarios                      |
| /api/users/:id | GET    | Filtrar Usuario por ID               |