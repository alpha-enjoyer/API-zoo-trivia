const { sequelize, DataTypes } = require('./db_connection');

const Hewan = sequelize.define('hewan', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  nama_hewan: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gambar: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  audio: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
    freezeTableName: true, // Mencegah penambahan akhiran 's' pada nama tabel
});




module.exports = { Hewan };
