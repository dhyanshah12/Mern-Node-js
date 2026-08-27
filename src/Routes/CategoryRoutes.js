const router = require("express").Router()

const categoryControllers = require("../Controllers/CategoryController")

router.get("/",categoryControllers.getAllCategories)

router.post("/",categoryControllers.createCategory)
module.exports = router