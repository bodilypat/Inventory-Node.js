//src/controllers/logController.js 

const logService = require('../services/logService');

exports.createLog = async (req, res, next) => {
    try {

        const logData = await logService.createLog(req.body);
        res.status(201).json({
            success: true,
            message: 'Log created successfully',
            data: logData
        });
    } catch (error) {
        next(error);
    }
};

exports.getLogs = async (req, res, next) => {
    try {
        const logs = await logService.getLogs();
        res.status(200).json({
            success: true,
            message: 'Logs retrieved successfully',
            data: logs
        });
    } catch (error) {
        next(error);
    }
};

exports.getLogById = async (req, res, next) => {
    try {
        const log = await logService.getLogById(req.params.id);
        if (!log) {
            return res.status(404).json({
                success: false,
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Log retrieved successfully',
            data: log
        });
    } catch (error) {
        next(error);
    }
};

exports.updateLog = async (req, res, next) => {
    try {
        const updatedLog = await logService.updateLog(req.params.id, req.body);
        if (!updatedLog) {
            return res.status(404).json({
                success: false,
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Log updated successfully',
            data: updatedLog
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteLog = async (req, res, next) => {
    try {
        const deletedLog = await logService.deleteLog(req.params.id);
        if (!deletedLog) {
            return res.status(404).json({
                success: false,                
                message: 'Log not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Log deleted successfully',
            data: deletedLog
        });
    } catch (error) {
        next(error);
    }
};  

