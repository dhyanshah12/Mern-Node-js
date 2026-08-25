const router = require("express").Router()

const rolecontrollers = require("../Controllers/RoleController")

router.get("/roles",rolecontrollers.getallRoles)

router.post("/savedroles",rolecontrollers.createRole)

module.exports = router