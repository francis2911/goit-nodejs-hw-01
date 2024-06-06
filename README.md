# goit-nodejs-hw-01

Tarea número 1 del modulo de nodejs, aplicación realizada en interfaz de linea de comandos (CLI) encargada de administrar (mostrar, crear, buscar y eliminar) contactos de una agenda telefónica.

Cuenta con los siguientes comandos y sus respectivos resultados:

# Obtenemos y mostramos la lista completa de contactos en forma de tabla (console.table).

node index.js --action list
![Listar todos los contactos disponibles](./static/listar-contactos.png)

# Obtenemos un contacto según su id

node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
![Alt text](./static/listar-contacto-por-id.png)

# Añadimos un contacto

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![Alt text](./static/crear-contacto.png)

# Eliminamos un contacto

node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
![Alt text](./static/eliminar-contacto.png)
