//const router = require("express-promise-router")();
const { Router } = require('express')
const router = Router()

const { 
    getUser,
    insert
} = require("../controllers/user");

router.post("/signup",insert);
router.post("/signin",getUser);


module.exports = router;