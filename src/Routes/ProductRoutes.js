const router = require("express").Router()
const productController = require("../Controllers/ProductController")

router.post("/",productController.createProduct)
router.get("/",productController.getallProducts)

router.put("/updatestock",productController.updateStockStatus)
module.exports = router