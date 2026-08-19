const router = require("express").Router()

const EmployeeController = require("../Controllers/EmployeeController")

router.get("/employee/:name/:company",EmployeeController.getEmp)
router.get("/emps",EmployeeController.getEmp)

module.exports = router