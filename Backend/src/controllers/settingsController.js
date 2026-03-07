//src/controllers/settingsController.js 

const settingsService = require('../services/settingsService');

exports.createSettings = async (req, res, next) => {
    try {

        const settingsData = req.body;
        const newSettings = await settingsService.createSettings(settingsData);
        res.status(201).json({
            success: true,
            message: 'Settings created successfully',
            data: newSettings
        });
    } catch (error) {
        next(error);
    }
};

exports.getSettings = async (req, res, next) => {
    try {
        const settings = await settingsService.getSettings();
        res.status(200).json({
            success: true,
            message: 'Settings retrieved successfully',
            data: settings
        });
    } catch (error) {
        next(error);
    }
};

exports.updateSettings = async (req, res, next) => {
    try {
        const settingsId = req.params.id;
        const settingsData = req.body;
        const updatedSettings = await settingsService.updateSettings(settingsId, settingsData);
        res.status(200).json({
            success: true,
            message: 'Settings updated successfully',
            data: updatedSettings
        });
    } catch (error) {
        next(error);
    }   
};

exports.deleteSettings = async (req, res, next) => {
    try {
        const settingsId = req.params.id;
        await settingsService.deleteSettings(settingsId);
        res.status(200).json({
            success: true,
            message: 'Settings deleted successfully'
        });
    }
    catch (error) {
        next(error);
    }   
};


