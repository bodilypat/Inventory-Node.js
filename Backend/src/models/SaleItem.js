//src/models/SaleItem.js 

const SaleItemSchema = new mongoose.Schema({
    sale: {
        type: Schema.Types.ObjectId,
        ref: 'Sale',
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number
    },
}, { timestamps: true });

const SaleItem = mongoose.model('SaleItem', SaleItemSchema);
module.exports = SaleItem;
