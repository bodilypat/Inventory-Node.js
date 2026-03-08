//src/services/purchaseService.js 

const Purchase = require('../models/Purchase');
const Product = require('../models/purchaseItem');
const Product = require('../models/Product');

exports.createPurchase = async (purchaseData, items) => {
    const purchase = new Purchase(purchaseData);
    await purchase.save();

    for (const item of items) {
        
        const product = await Product.findById(item.productId);
        if (!product) {
            throw new Error(`Product with ID ${item.productId} not found`);
        }
        if (product.stock < item.quantity) {
            throw new Error(`Insufficient stock for product ${product.name}`);
        }
        product.stock -= item.quantity;
        await product.save();
        const purchaseItem = new Product({
            purchaseId: purchase._id,
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
        });
        await purchaseItem.save();
    }
    return purchase;
};

