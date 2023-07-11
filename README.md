# Ejercicio 3 del TP Backend: Paleta de Colores

## Descripción

Crear un proyecto de backend con los endpoints necesarios para poder agregar,
listar, borrar, editar y obtener una paleta de colores. Cada color será un objeto que
contenga al menos las siguientes propiedades:

1. código único
2. nombre del color
3. código hexadecimal (opcional)
4. código RGB o RGBA (opcional)
   Modelar la base de datos necesaria con MongoDB para almacenar estos datos y
   validar los datos recibidos en los request antes de almacenar en la base de datos.

## Tecnologias / Herramientas 🛠

- [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Javascript](https://www.w3schools.com/js/)
- [NodeJs](https://nodejs.org/es)
- [ExpressJs](https://expressjs.com/es/)
- [BabelJs](https://babeljs.io/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors#readme)
- [Morgan](https://github.com/expressjs/morgan)
- [Express Validator](https://express-validator.github.io/docs)
- [Markdown](https://markdown.es/)

## Pasos para clonar y ejecutar el Servidor 🖥

Sigue estos pasos para clonar y ejecutar el servidor en tu entorno local:

1.  **Requisitos previos:** Asegúrate de tener Node.js instalado en tu sistema. Puedes descargar la versión más reciente desde el sitio web oficial de Node.js (https://nodejs.org).
    Asegúrate también de tener un administrador de paquetes de Node.js instalado, como npm (que se instala junto con Node.js) o Yarn.

2.  **Clona el repositorio:** En tu línea de comandos, ejecuta el siguiente comando para clonar el repositorio:

    ```
    git clone https://github.com/jgromerou/ej3-practico-backend.git
    ```

3.  **Accede al directorio:** Ve al directorio de la aplicación clonada:

    ```
    cd <ej3-practico-backend>
    ```

4.  **Instala las dependencias:** Ejecuta el siguiente comando para instalar las dependencias de la aplicación:

    ```
    npm install
    ```

5.  **Inicia el servidor:** Utiliza el siguiente comando para iniciar la aplicación en tu entorno local:

        ```
        npm run dev
        ```

    Esto ejecutará el script definido en el archivo package.json para iniciar el servidor Node.js.

6.  **Accede al servidor:** Abre tu navegador web y visita la siguiente URL: _http://localhost:4000_. El servidor debería cargarse, mostrar el siguiente mensaje: 'Bienvenidos al Backend de Paleta de Colores' y estar lista para usar. Se recomienda usar [Postman](https://www.postman.com/) para las solicitudes al servidor.

## Llamadas a la API

URL -> http://localhost:4000/apicolores/

## Métodos de Colores

| Método | #Url de Colores | #Acción                     |
| ------ | --------------- | --------------------------- |
| POST   | /colores        | Crear nuevo color           |
| GET    | /colores        | Muestra la lista de colores |
| PUT    | /colores/:id    | Edita un color por su id    |
| DELETE | /colores/:id    | Borra un color por su id    |
| GET    | /colores/:id    | Busca un color por su id    |

Ejemplo de Body en el envío de Crear nuevo Color:

```
    {
    "nombreColor":"red",
    "codigoHexadecimal":"#FFFF00",
    "codigoRGB":"rgb(255,255,0)"
    }
```

## Repositorio Frontend

[Frontend Paleta de Colores](https://github.com/jgromerou/ej4-practico-backend)

## Autor

1. Juan Gerardo Romero Uro [github](https://github.com/jgromerou)
