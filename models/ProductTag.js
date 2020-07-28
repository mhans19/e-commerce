// DEPENDENCIES
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// INITIALIZE MODEL CLASS
class ProductTag extends Model {}
// PRODUCT-TAG MODEL
ProductTag.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define a product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // define a tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);
// MODULE EXPORTS
module.exports = ProductTag;
