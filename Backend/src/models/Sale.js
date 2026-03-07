//src/models/sale.js 

const saleSchema = new mongoose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    customer_email: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true
    },
    items: [{
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
        }
    }],
    total_amount: {
        type: Number,
        required: true
    },
    sale_date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;

