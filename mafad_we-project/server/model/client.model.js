//Définition du modèle de la table client en bdd
const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const User = require('./user.model'); // Importer le modèle User

const Client = sequelize.define('Client', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  lastInvoiceDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});


User.hasMany(Client, { foreignKey: 'userid' });
Client.belongsTo(User, { foreignKey: 'userid'});

module.exports = Client;
