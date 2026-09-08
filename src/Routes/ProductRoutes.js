const router = require("express").Router()
const productController = require("../Controllers/ProductController")
const zodeMiddleware = require("../middlewares/ZodeMiddleWare")
const productValidationschema = require("../validationschemas/UserValidationSchemas")

// router.post("/",productController.createProduct)
router.post("/",zodeMiddleware(productValidationschema),productController.createProduct)
router.get("/",productController.getallProducts)

router.put("/updatestock",productController.updateStockStatus)
module.exports = router