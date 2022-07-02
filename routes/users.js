const user_controller = require("../controllers/users");
const path = require("path");
const router = require('express').Router();


router.post('/insert',user_controller.createUser);
router.post('/login',user_controller.login);
router.put('/updatePassword/:id',user_controller.updatePassword);
router.put('/updateProfile/:id',user_controller.updateProfile);
router.get('/getUsers',user_controller.getUsers);
router.delete('/delete/:id',user_controller.delete);


module.exports = router


