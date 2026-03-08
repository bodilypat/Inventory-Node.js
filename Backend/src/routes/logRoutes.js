//src/routes/logRoutes.js 

const express = require('express');
const router = express.Router();

// Controller
const logController = require('../controllers/logController');

// Middlewares
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

/* 
    @route GET /api/logs
    @desc GET all system logs 
    @access Admin only
 */
router.get(
    '/', 
    authMiddleware, 
    roleMiddleware(['admin']), 
    logController.getAllLogs
);

/* 
    @route DELETE /api/logs/:id
    @desc DELETE a specific system log
    @access Admin only
 */

router.delete(
    '/:id',
    authMiddleware,
    roleMiddleware(['admin']),
    logController.deleteLogById
);
