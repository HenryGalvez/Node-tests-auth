const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized Request')
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token == 'null') {
        return res.status(401).send('Unauthorized Request')
    }

    const payload = jwt.verify(token,'secretkey')
    req.userId = payload._id
    next()
}

module.exports = verifyToken