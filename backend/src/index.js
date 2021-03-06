
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('./db/mongoose')

userRouter = require('./routers/user')
resultRouter = require('./routers/result')

const app = express();

const port = process.env.port || 9000
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(resultRouter)

app.listen(port,()=>{
    console.log('Server is up on port ' + port)
})