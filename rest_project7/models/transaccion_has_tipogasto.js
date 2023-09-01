const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion_has_tipogasto', {
    Transaccion_idTransaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transaccion',
        key: 'idTransaccion'
      }
    },
    Transaccion_CuentaBancaria_idCuentaBancaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transaccion',
        key: 'CuentaBancaria_idCuentaBancaria'
      }
    },
    Transaccion_CuentaBancaria_Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transaccion',
        key: 'CuentaBancaria_Usuario_idUsuario'
      }
    },
    tipoGasto_idtipoGasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tipogasto',
        key: 'idtipoGasto'
      }
    }
  }, {
    sequelize,
    tableName: 'transaccion_has_tipogasto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Transaccion_idTransaccion" },
          { name: "Transaccion_CuentaBancaria_idCuentaBancaria" },
          { name: "Transaccion_CuentaBancaria_Usuario_idUsuario" },
          { name: "tipoGasto_idtipoGasto" },
        ]
      },
      {
        name: "fk_Transaccion_has_tipoGasto_tipoGasto1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoGasto_idtipoGasto" },
        ]
      },
      {
        name: "fk_Transaccion_has_tipoGasto_Transaccion1_idx",
        using: "BTREE",
        fields: [
          { name: "Transaccion_idTransaccion" },
          { name: "Transaccion_CuentaBancaria_idCuentaBancaria" },
          { name: "Transaccion_CuentaBancaria_Usuario_idUsuario" },
        ]
      },
    ]
  });
};
