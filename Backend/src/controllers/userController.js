//src/controllers/userContrller.js 

const userService = require('../services/userService');

exports.registerUser = async (req, res, next) => {
    try {

        const user = await userService.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user
        });
    } catch (error) {
        next(error);
    }
};

exports.loginUser = async (req, res, next) => {
    try {
        const token = await userService.loginUser(req.body);

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            token: token
        });
    } catch (error) {
        next(error);
    }
};

exports.getUserProfile = async (req, res, next) => {
    try {
        const userProfile = await userService.getUserProfile(req.user.id);

        res.status(200).json({
            success: true,
            message: 'User profile retrieved successfully',
            data: userProfile
        });
    } catch (error) {
        next(error);
    }
};

exports.updateUserProfile = async (req, res, next) => {
    try {
        const updatedProfile = await userService.updateUserProfile(req.user.id, req.body);

        res.status(200).json({
            success: true,
            message: 'User profile updated successfully',
            data: updatedProfile
        });
    } catch (error) {
        next(error);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await userService.deleteUser(req.user.id);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};



