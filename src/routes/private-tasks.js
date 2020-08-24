//const router = require("express-promise-router")();
const verifyToken = require("../security/verify")
const { Router } = require('express')
const router = Router()

const { 
    getTasks
} = require("../controllers/private-task")

router.get("/private-tasks",verifyToken,getTasks)


module.exports = router;