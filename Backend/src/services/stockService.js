//src/services/StockService.js 

const Product = require('../models/Product');
const StockMovement = require('../models/stockMovement');

const createProduct = async (productData) => {
    const { productId, quantity, type } = productData;

    const product = await Product.findById(productId);
    if (!product) throw new Error('Product not found');

    if (type === 'IN') {
        product.stock += quantity;
    } else if (type === 'OUT') {
        if (product.stock < quantity) throw new Error('Insufficient stock');
        product.stock -= quantity;
    }

    await product.save();
    const stockMovement = new StockMovement({
        product: productId,
        quantity,
        type,
        date: new Date()
    });
    await stockMovement.save();
    return product;
};

const getCurrentStock = async () => {
    return Product.find().select('name quantity');
};
