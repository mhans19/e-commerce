// DEPENDENCIES
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// INITIALIZE MODEL CLASS
class Product extends Model {}
// PRODUCT MODEL
Product.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define a price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    // define a stock column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    // define category_id column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
// MODULE EXPORTS
module.exports = Product;
