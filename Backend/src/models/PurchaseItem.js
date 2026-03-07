//src/models/PurchaseItems.js 

const PurchaseItemSchema = new mongoose.Schema({
    purchase: { 
        type: Schema.Types.ObjectId, 
        ref: 'Purchase', 
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

const PurchaseItem = mongoose.model('PurchaseItem', PurchaseItemSchema);
module.exports = PurchaseItem;

