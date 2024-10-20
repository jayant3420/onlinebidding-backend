const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const bids = sequelize.define(
    "bids",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
      bidAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      bidTime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      tableName: "bids",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "productId",
          using: "BTREE",
          fields: [{ name: "productId" }],
        },
        {
          name: "userId",
          using: "BTREE",
          fields: [{ name: "userId" }],
        },
      ],
    }
  );

  bids.associate = (models) => {
    bids.belongsTo(models.products, { foreignKey: "productId", as: "product" });
    bids.belongsTo(models.users, { foreignKey: "userId", as: "user" });
  };

  return bids;
};
