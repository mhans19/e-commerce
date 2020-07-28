// DEPENDENCIES
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// INITIALIZE MODEL CLASS
class Category extends Model {}
// CATEGORY MODEL
Category.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: { 
      // define a category_name column
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// MODILE EXPORTS
module.exports = Category;
