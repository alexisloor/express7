const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuentabancaria', {
    idCuentaBancaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banco: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipoCta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    saldoActual: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'cuentabancaria',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCuentaBancaria" },
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_CuentaBancaria_Usuario_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
