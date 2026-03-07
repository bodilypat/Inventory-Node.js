//src/models/index.js 
/* Models Relationships */
const User = require('./Users');
const Category = require('./Categories');
const Supplier = require('./Suppliers');
const Product = require('./Products');
const Sale = require('./Sales');
const SaleItem = require('./SaleItems');
const Purchase = require('./Purchase');
const PurchaseItem = require('./PurchaseItems');
const StockMovement = require('./StockMovement');
const Logs = require('./Logs');
const settings = require('./Settings');

// User has many Sales
User.hasMany(Sale, { foreignKey: 'user_id' });
Sale.belongsTo(User, { foreignKey: 'user_id' });

// Category has many Products
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

// Supplier has many Products
Supplier.hasMany(Product, { foreignKey: 'supplier_id' });
Product.belongsTo(Supplier, { foreignKey: 'supplier_id' });

// Sale has many SaleItems
Sale.hasMany(SaleItem, { foreignKey: 'sale_id' });
SaleItem.belongsTo(Sale, { foreignKey: 'sale_id' });

// Product has many SaleItems
Product.hasMany(SaleItem, { foreignKey: 'product_id' });
SaleItem.belongsTo(Product, { foreignKey: 'product_id' });

// Purchase has many PurchaseItems
Purchase.hasMany(PurchaseItem, { foreignKey: 'purchase_id' });
PurchaseItem.belongsTo(Purchase, { foreignKey: 'purchase_id' });

// Product has many PurchaseItems
Product.hasMany(PurchaseItem, { foreignKey: 'product_id' });
PurchaseItem.belongsTo(Product, { foreignKey: 'product_id' });

// Product has many StockMovements
Product.hasMany(StockMovement, { foreignKey: 'product_id' });
StockMovement.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
    User,
    Category,
    Supplier,
    Product,
    Sale,
    SaleItem,
    Purchase,
    PurchaseItem,
    StockMovement,
    Logs,
    settings
};
