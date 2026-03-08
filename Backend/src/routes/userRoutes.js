//src/routes/userRoutes.js 

const express = require('express');
const router = express.Router();

//Controllers 
const userController = require('../controllers/userController');

// Middleware 
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Validation
const { validateUserRegister, validateUserUpdate } = require('../validation/userValidation');

/* 
    * @routes POST/api/users/register
    * @desc Register a new user
    * @access Public
*/
router.post('/register', validateUserRegister, userController.register);

/* 
    * @routes POST/api/users/Login
    * @desc Login user and return JWT token
    * @access Public
*/
router.post('/login', userController.login);

/* 
    * @routes GET/api/users/
    * @desc Get all users
    * @access Admin only
*/
router.get('/', authMiddleware, roleMiddleware(['Admin']), userController.getAllUsers);

/* 
    * @routes PUT/api/users/:id
    * @desc Update user profile
    * @access Admin or the user themselves
    */
router.put('/:id', authMiddleware, validateUserUpdate, userController.updateProfile);

/* 
    * @routes DELETE/api/users/:id
    * @desc Delete a user
    * @access Admin only
    */
router.delete('/:id', authMiddleware, roleMiddleware(['Admin']), userController.deleteUser);

module.exports = router;

