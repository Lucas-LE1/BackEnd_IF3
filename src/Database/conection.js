const { Sequelize } = require('sequelize');
require('dotenv').config()

const DATABASE = process.env.DATABASE;
const USERNAME = process.env.USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.PORT_DATABASE;

const sequelize = new Sequelize({
  database: DATABASE,
  username: USERNAME,
  password: DB_PASSWORD,
  host: HOST,
  port: PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

authenticate_db()

async function authenticate_db() {
  try {
    await sequelize.authenticate();
    console.log('[database]: Conexão estabelecida com sucesso');
  } catch (error) {
    console.error('[database]: Unable to connect to the database:', error);
  }
}

module.exports = {
  sequelize: sequelize
}