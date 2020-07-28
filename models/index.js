// DEPENDENCIES ( IMPORT MODELS )
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// MODEL ASSOCIATIONS
  // Products belongsTo Category
  Product.belongsTo(Category, {
    foreignKey: 'category_id'
  })
  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id'
  })
  // Products belongToMany Tags (through ProductTag)
    //associations for tags (through)
  Product.belongsToMany(Tag, {
    through: ProductTag,
    as: 'tags',
    foreignKey: 'product_id'
  });
  // Tags belongToMany Products (through ProductTag)
    //associations for products (through)
  Tag.belongsToMany(Product, {
    through: ProductTag,
    as: 'products',
    foreignKey: 'tag_id'
  });
// MODULE EXPORTS
module.exports = { Product, Category, Tag, ProductTag };
