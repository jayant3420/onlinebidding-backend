var DataTypes = require("sequelize").DataTypes;
var _bids = require("./bids");
var _products = require("./products");
var _users = require("./users");

function initModels(sequelize) {
  var bids = _bids(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  bids.belongsTo(products, { as: "product", foreignKey: "productId"});
  products.hasMany(bids, { as: "bids", foreignKey: "productId"});
  bids.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(bids, { as: "bids", foreignKey: "userId"});

  return {
    bids,
    products,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
