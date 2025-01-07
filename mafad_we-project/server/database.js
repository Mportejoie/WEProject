const { Sequelize } = require('sequelize');

// Initialiser Sequelize avec PostgreSQL
const sequelize = new Sequelize('MAFAD', 'postgres', 'root', {
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'MAFAD',
  host: process.env.DB_HOST ||'localhost',
  port: process.env.DB_PORT || 5432,
  dialect: 'postgres'
});

module.exports = sequelize;
