const router = require("express").Router()

const userController = require("../Controllers/UserController")

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.get("/searchUser",userController.searchUser)
router.delete("/user/:id",userController.deleteUser)

router.post("/user",userController.createUser)
router.put("/user/:id",userController.updateUser)
router.put("/userbyage/:age",userController.updateByAge)

module.exports = router