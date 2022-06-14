const express = require('express');
const router = express.Router();

const { getUsers } = require('../controllers/usersControllers');

router.get('/', getUsers);

module.exports = router;