const router = require("express").Router()

const userController = require("../Controllers/UserController")
const testMiddleware = require("../middlewares/TestMiddleWare")
const zodeMiddleware = require("../middlewares/ZodeMiddleWare")
const userValidationSchema = require("../validationschemas/UserValidationSchemas")
const upload  = require("../middlewares/UploadMiddleware")

router.get("/users",userController.getAllUsers)
router.get("/user/:id",userController.getUserById)
router.get("/searchUser",userController.searchUser)
router.delete("/user/:id",userController.deleteUser)

// router.post("/user",userController.createUser)
// router.post("/user",testMiddleware("MANAGER"),userController.createUser)
// router.post("/user",zodeMiddleware(userValidationSchema),userController.createUser)
router.post("/user",upload.single("file"),userController.createUser)

router.put("/user/:id",userController.updateUser)
router.put("/userbyage/:age",userController.updateByAge)

module.exports = router