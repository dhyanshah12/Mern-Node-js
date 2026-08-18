const router = require("express").Router()

const userController = require("../Controllers/UserController")

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)

module.exports = router