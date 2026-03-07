//src/models/Product.js 

const productSchema = new mongoose.Schema({
    product_name: { 
        type: String, 
        required: true
    },
    sku: {
        type: String,
        unique: true,
    },
    barcode: {
        type: String,
        unique: true,
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    },
    supplier: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Supplier' 
    },
    unit_price: { 
        type: Number, 
        required: true 
    },
    quantity_in_stock: { 
        type: Number, 
        required: true 
    },
    description: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;



