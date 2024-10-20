module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    minBidAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    currentBidAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    bidStartTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bidEndTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    timestamps: true,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  });

  products.associate = (models) => {
    products.hasMany(models.bids, { foreignKey: 'productId', as: 'bids' });
  };

  return products;
};
