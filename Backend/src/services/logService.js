//src/services/logService.jjs

const log = require('../models/Log');

exports.createLog = async (userId,action) => {
    const newLog = new log({
        userId,
        action
    });
    await newLog.save();    
}
