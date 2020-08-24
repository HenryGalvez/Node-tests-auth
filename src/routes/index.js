const { Router } = require('express')
const router = Router()

const User = require('../models/User');
const jwt = require('jsonwebtoken')

router.get('/',(req, res) => res.send('Hello world'))

router.post('/signup', async (req, res) =>{
    const { email, password } = req.body
    const newUser = new User({email, password})
    await newUser.save()
    
    const token = jwt.sign({_id: newUser.id},'secretkey')
    res.status(200).json({token})

})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({email})
    if(!user) return res.status(400).send("this email does not exists")
    if(user.password !== password) return res.status(401).send('Wrong password')
    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token})
})

router.get('/tasks', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        }
    ])
})

router.get('/private-tasks', verifyToken, (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: '2020-08-17T20:39:42.160Z'
        }
    ])
})

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId)
})

module.exports = router

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