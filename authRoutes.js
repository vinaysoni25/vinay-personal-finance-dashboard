const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);

// Similarly, add a route for signup
module.exports = router;
