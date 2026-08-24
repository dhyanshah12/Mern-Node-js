const router = require("express").Router()

const userController = require("../Controllers/UserController")

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.get("/searchUser",userController.searchUser)
module.exports = router