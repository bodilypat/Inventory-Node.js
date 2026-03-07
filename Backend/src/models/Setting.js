//src/models/Settings.js 

const stockMovementSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    type: {
        type: String,
        enum: ['in', 'out'],
    },
    quantity: {
        type: Number,
        required: true,
    },
    referenceType: {
        type: String,
        enum: ['purchase', 'sale', 'adjustment'],
    },
    referenceId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const StockMovement = mongoose.model('StockMovement', stockMovementSchema);

module.exports = StockMovement;

