//src/services/inventoryService.js 


const Product = require('../models/Product');

exports.getLowStockProducts = async () =>  {

    return await Product.find({ stock: { $lt: 10 } });
};

exports.getInventoryValue = async () =>  {

    const products = await Product.find();

    let totalValue = 0;

    products.forEach(product => {
        totalValue += product.price * product.quantity_in_stock;
    });

    return totalValue;
};

exports.getStockMovements = async (productId) =>  {

    // This function would ideally query a StockMovements collection to get the movement history for the specified productId
    // For demonstration, we will return a mock response
    
    return [
        { movement_type: 'in', quantity: 50, reference_id: 1, timestamp: new Date() },
        { movement_type: 'out', quantity: 20, reference_id: 2, timestamp: new Date() },
    ];
};

exports.updateStock = async (productId, movementType, quantity) =>  {

    const product = await Product.findById(productId);

    if (!product) {
        throw new Error('Product not found');
    }   
    if (movementType === 'in') {
        product.quantity_in_stock += quantity;
    } else if (movementType === 'out') {
        if (product.quantity_in_stock < quantity) {
            throw new Error('Insufficient stock');
        }
        product.quantity_in_stock -= quantity;
    } else {
        throw new Error('Invalid movement type');
    }
    await product.save();
    // Here you would also create a new StockMovement document to record this movement
    return product;
};


