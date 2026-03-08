//src/routes/settingRoutes.js 

const express = require('express');
const router = express.Router();

// Controller 
const settingController = require('../controllers/settingController');

// Middlewares 
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

/* 
    @route GET /api/settings
    @desc GET application settings
    @access Authenticated users with admin role
 */
router.get(
    '/',
    authMiddleware,
    roleMiddleware(['admin']),
    settingController.getAllSettings
);

/* 
    @route PUT /api/settings
    @desc UPDATE application settings
    @access Authenticated users with admin role
 */
router.put(
    '/',
    authMiddleware,
    roleMiddleware(['admin']),
    settingController.updateSettings
);

/* 
    @route PATCH /api/settings/company
    @desc UPDATE company-specific settings
    @access Authenticated users with admin role
 */
router.patch(
    '/company',
    authMiddleware,
    roleMiddleware(['admin']),
    settingController.updateCompanySettings
);

/* 
    @route PATCH /api/settings/inventory
    @desc Update inventory settings
    @access Authenticated users with admin role
 */
router.patch(
    '/inventory',
    authMiddleware,
    roleMiddleware(['admin']),
    settingController.updateInventorySettings
);

module.exports = router;

