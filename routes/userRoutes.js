const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getCurrentUser} = require('../Controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getCurrentUser', getCurrentUser);

module.exports = router;