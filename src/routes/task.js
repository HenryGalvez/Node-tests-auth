//const router = require("express-promise-router")();
const { Router } = require('express')
const router = Router()

const { 
    getTasks
} = require("../controllers/task");

router.get("/tasks",getTasks);


module.exports = router;