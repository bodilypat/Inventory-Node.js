//src/services/salesService.s 

const Sales = require('../models/Sale');
const SaleItem = require('../models/SaleItem');
const Product = require('../models/Product');

exports.createSale = async (saleData, saleItems) => {

    const sale = await Sales.create(saleData);

    await Promise.all(saleItems.map(async (item) => {
        const product = await Product.findByPk(item.product_id);
        if (!product) {
            throw new Error(`Product with ID ${item.product_id} not found`);
        }
        if (product.stock < item.quantity) {
            throw new Error(`Insufficient stock for product ID ${item.product_id}`);
        }
        await SaleItem.create({
            sale_id: sale.sale_id,
            product_id: item.product_id,
            quantity: item.quantity,
            price: item.price
        });
        product.stock -= item.quantity;
        await product.save();
    }));

    return sale;
};

