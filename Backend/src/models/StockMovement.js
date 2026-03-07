//src/models/Stock_movement.js

const StockMovementSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    movement_type: {
        type: String,
        enum: ['IN', 'OUT'],
        required: true
    },
    reference_id: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'reference_model',
        required: true
    },
    reference_model: {
        type: String,
        enum: ['Purchase', 'Sale'],
        required: true
    },
    movement_date: {
        type: Date,
        default: Date.now
    },  
}, { timestamps: true });

const StockMovement = mongoose.model('StockMovement', StockMovementSchema);
module.exports = StockMovement;

