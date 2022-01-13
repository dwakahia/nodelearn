const express = require('express');
const router = express.Router();
const {createUser, getUsers, getUserById, updateUser, deleteUser} = require('../controllers/users_controller');

router.get('/', getUsers)
router.post('/create', createUser)
router.get('/:id', getUserById)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

module.exports = router;