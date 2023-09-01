const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipogasto', {
    idtipoGasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreGasto: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tipogasto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idtipoGasto" },
        ]
      },
    ]
  });
};
