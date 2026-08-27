const router = require("express").Router()
const productController = require("../Controllers/ProductController")

router.post("/",productController.createProduct)
router.get("/",productController.getallProducts)

module.exports = router