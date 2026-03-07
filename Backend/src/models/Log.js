//src/models/Logs.js 

const logSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    action: {
        type: String,
    },
    module: {
        type: String,
    },
    description: {
        type: String,
    },
    ipAddress: {
        type: String,
    },    
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;

