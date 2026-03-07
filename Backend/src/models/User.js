//src/models/User.js
const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['admin', 'manager','staff'], 
        default: 'staff' 
    },
    isActive: {
        type: Boolean,
        default: true
    },
    lastLogin: {
        type: Date
    }
}, {    
    timestamps: { createdAt: 'created_at' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


