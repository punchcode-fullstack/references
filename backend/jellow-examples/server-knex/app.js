const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const authRoutes = require('./routes/auth')
const projectRoutes = require('./routes/projects')
const cardRoutes = require('./routes/cards')
const columnRoutes = require('./routes/columns')
const userRoutes = require('./routes/users')
app.use('/api', authRoutes)
app.use('/api', cardRoutes)
app.use('/api', projectRoutes)
app.use('/api', columnRoutes)
app.use('/api', userRoutes)
app.listen(3001, (req, res) => {
    console.log("listening on port 3001")
})