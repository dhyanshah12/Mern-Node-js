const router = require("express").Router()

const EmployeeController = require("../Controllers/EmployeeController")
const EmpModel = require("../models/EmpModel")

router.get("/employee/:name/:company",EmployeeController.getEmp)
router.get("/emps",EmployeeController.getEmp)
router.get("/searhuser",EmployeeController.searchUser)

module.exports = router