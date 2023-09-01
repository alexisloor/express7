const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaccion', {
    idTransaccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechaHora: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    tipoTrans: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    montoTrans: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CuentaBancaria_idCuentaBancaria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cuentabancaria',
        key: 'idCuentaBancaria'
      }
    },
    CuentaBancaria_Usuario_idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cuentabancaria',
        key: 'Usuario_idUsuario'
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
    tableName: 'transaccion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTransaccion" },
          { name: "CuentaBancaria_idCuentaBancaria" },
          { name: "CuentaBancaria_Usuario_idUsuario" },
          { name: "tipoGasto_idtipoGasto" },
        ]
      },
      {
        name: "fk_Transaccion_CuentaBancaria1_idx",
        using: "BTREE",
        fields: [
          { name: "CuentaBancaria_idCuentaBancaria" },
          { name: "CuentaBancaria_Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_Transaccion_tipoGasto1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoGasto_idtipoGasto" },
        ]
      },
    ]
  });
};
