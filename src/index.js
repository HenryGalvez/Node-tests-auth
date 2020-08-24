const express = require('express')
const app = express()
const cors = require('cors')

//this is for use mongoDB
//require('./database')

app.use(cors())
app.use(express.json())

//this is for use mongoDB
//app.use('/api',require('./routes/index'))

//this is for use MySql
app.use('/api/user',require('./routes/user'))
app.use('/api/task',require('./routes/task'))
app.use('/api/private-task',require('./routes/private-tasks'))

app.listen(3000)
console.log('Server on port', 3000)