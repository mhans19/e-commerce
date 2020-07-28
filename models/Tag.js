// DEPENDENCIES
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
// INITIALIZE MODEL CLASS
class Tag extends Model {}
// TAG MODEL
Tag.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define a product id column
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// MODULE EXPORTS
module.exports = Tag;
