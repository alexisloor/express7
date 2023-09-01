const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metaahorro', {
    idmetaAhorro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreMeta: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    montoObjetivo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fechaLimite: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    progreso: {
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
    tableName: 'metaahorro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmetaAhorro" },
          { name: "Usuario_idUsuario" },
        ]
      },
      {
        name: "fk_metaAhorro_Usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "Usuario_idUsuario" },
        ]
      },
    ]
  });
};
