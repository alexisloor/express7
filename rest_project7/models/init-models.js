var DataTypes = require("sequelize").DataTypes;
var _cuentabancaria = require("./cuentabancaria");
var _metaahorro = require("./metaahorro");
var _tipogasto = require("./tipogasto");
var _transaccion = require("./transaccion");
var _transaccion_has_tipogasto = require("./transaccion_has_tipogasto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var cuentabancaria = _cuentabancaria(sequelize, DataTypes);
  var metaahorro = _metaahorro(sequelize, DataTypes);
  var tipogasto = _tipogasto(sequelize, DataTypes);
  var transaccion = _transaccion(sequelize, DataTypes);
  var transaccion_has_tipogasto = _transaccion_has_tipogasto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  transaccion.belongsTo(cuentabancaria, { as: "CuentaBancaria_idCuentaBancaria_cuentabancarium", foreignKey: "CuentaBancaria_idCuentaBancaria"});
  cuentabancaria.hasMany(transaccion, { as: "transaccions", foreignKey: "CuentaBancaria_idCuentaBancaria"});
  transaccion.belongsTo(cuentabancaria, { as: "CuentaBancaria_Usuario_idUsuario_cuentabancarium", foreignKey: "CuentaBancaria_Usuario_idUsuario"});
  cuentabancaria.hasMany(transaccion, { as: "CuentaBancaria_Usuario_idUsuario_transaccions", foreignKey: "CuentaBancaria_Usuario_idUsuario"});
  transaccion.belongsTo(tipogasto, { as: "tipoGasto_idtipoGasto_tipogasto", foreignKey: "tipoGasto_idtipoGasto"});
  tipogasto.hasMany(transaccion, { as: "transaccions", foreignKey: "tipoGasto_idtipoGasto"});
  transaccion_has_tipogasto.belongsTo(tipogasto, { as: "tipoGasto_idtipoGasto_tipogasto", foreignKey: "tipoGasto_idtipoGasto"});
  tipogasto.hasMany(transaccion_has_tipogasto, { as: "transaccion_has_tipogastos", foreignKey: "tipoGasto_idtipoGasto"});
  transaccion_has_tipogasto.belongsTo(transaccion, { as: "Transaccion_idTransaccion_transaccion", foreignKey: "Transaccion_idTransaccion"});
  transaccion.hasMany(transaccion_has_tipogasto, { as: "transaccion_has_tipogastos", foreignKey: "Transaccion_idTransaccion"});
  transaccion_has_tipogasto.belongsTo(transaccion, { as: "Transaccion_CuentaBancaria_idCuentaBancaria_transaccion", foreignKey: "Transaccion_CuentaBancaria_idCuentaBancaria"});
  transaccion.hasMany(transaccion_has_tipogasto, { as: "Transaccion_CuentaBancaria_idCuentaBancaria_transaccion_has_tipogastos", foreignKey: "Transaccion_CuentaBancaria_idCuentaBancaria"});
  transaccion_has_tipogasto.belongsTo(transaccion, { as: "Transaccion_CuentaBancaria_Usuario_idUsuario_transaccion", foreignKey: "Transaccion_CuentaBancaria_Usuario_idUsuario"});
  transaccion.hasMany(transaccion_has_tipogasto, { as: "Transaccion_CuentaBancaria_Usuario_idUsuario_transaccion_has_tipogastos", foreignKey: "Transaccion_CuentaBancaria_Usuario_idUsuario"});
  cuentabancaria.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(cuentabancaria, { as: "cuentabancaria", foreignKey: "Usuario_idUsuario"});
  metaahorro.belongsTo(usuario, { as: "Usuario_idUsuario_usuario", foreignKey: "Usuario_idUsuario"});
  usuario.hasMany(metaahorro, { as: "metaahorros", foreignKey: "Usuario_idUsuario"});

  return {
    cuentabancaria,
    metaahorro,
    tipogasto,
    transaccion,
    transaccion_has_tipogasto,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
