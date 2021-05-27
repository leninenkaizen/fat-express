require('dotenv').config();

export default {
    "name": "default",
    "type": process.env.DB_CONNECTION,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": ["src/database/entities/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}
