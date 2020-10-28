# Rest API con Express + Mongodb

Este proyecto expone un Rest API utilizando Express como framework web y MongoDB como base de datos NoSQL.

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
    
# Ejecución

Para ejecutar este proyecto, primero se deben instalar las dependencias con el comando:

```bash
npm install
```

Se debe crear un archivo `.env` que tenga la cadena de conexión a la base de datos MongoDB. La estructura debe ser la siguiente:

```ini
DB_CONNECTION=mongodb+srv://<usuario>:<password>@<url_base_de_datos>?retryWrites=true&w=majority
```

Para ejecutar el proyecto, ejecute:
```bash
npm start
```
