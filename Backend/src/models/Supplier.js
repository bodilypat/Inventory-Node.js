//src/models/supplier.js
const supplierSchema = new mongoose.Schema({
    supplier_name: { 
        type: String, 
        required: true 
    },
    contact_person_name: { 
        type: String, 
        required: true 
    },
    contact_email: { 
        type: String, 
        required: true 
    },
    contact_phone: { 
        type: String,
        required: true 
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);
module.exports = Supplier;




