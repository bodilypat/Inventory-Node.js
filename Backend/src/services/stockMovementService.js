//src/services/stockService.js 

const stockMovement = require("../models/StockMovement")
exports.recordStockMovement = async (productId, movementType, quantity, referenceId) => {
    try {
        const movement = new stockMovement({
            productId,
            movementType,
            quantity,
            referenceId
        });
        await movement.save();
        return movement;
    }
    catch (error) {
        throw new Error("Error recording stock movement: " + error.message);
    }
};

