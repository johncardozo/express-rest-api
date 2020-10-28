# Rest API con Express + Mongodb

Este proyecto expone un Rest API utilizando Express como framework web y MongoDB como base de datos NoSQL. En la carpeta `/client`hay un cliente de Nodejs que consume los endpoints expuestos por el RestAPI.

## Herramientas utilizadas
- VSCode
- Insomnia
- Microsoft Edge
- MongoDB Atlas
- Nodejs
    - Express
    - Nodemon
    - Mongoose
    - Dotenv
    - Body-parser
    - Cors
    - Axios
    
## Instalación

Para instalar las dependencias ejecute:

```bash
npm install
```

Se debe crear un archivo `.env` que tenga la cadena de conexión a la base de datos MongoDB. La estructura debe ser la siguiente:

```ini
DB_CONNECTION=mongodb+srv://<usuario>:<password>@<url_base_de_datos>?retryWrites=true&w=majority
```

## Ejecución

Para ejecutar el proyecto, ejecute:
```bash
npm start
```