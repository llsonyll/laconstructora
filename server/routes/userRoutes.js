const express = require('express');
const router = express.Router();

const { getUser, updateUser, createUser, removeUser } = require('../controllers/userControllers');

// router.post('/', createUser);
// router.put('/', updateUser);
router.route('/').post(createUser).put(updateUser)
// router.get('/:id', getUser);
// router.delete('/:id', removeUser);
router.route('/:id').get(getUser).delete(removeUser)

module.exports = router;