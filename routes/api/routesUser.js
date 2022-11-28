const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/controllerUser');

router.route('/').get(getUsers).post(createUser);


router.route('/:userID')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userID/friends/:friendID').post(addFriend)
.delete(deleteFriend);

module.exports = router;