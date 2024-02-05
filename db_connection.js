const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db_rchi','root','', {
  host:'localhost',
  dialect:'mysql',
}); //ganti

module.exports = { sequelize, DataTypes };