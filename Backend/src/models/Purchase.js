//src/models/Purchase.js 

const purchaseSchema = new mongoose.Schema({
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    purchase_date: {
        type: Date, 
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true   
    },  
}, { timestamps: true });

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;



