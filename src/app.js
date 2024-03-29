const express = require('express')
const morgan = require('morgan')
const {userRouter} = require('./routes/user')
const bodyParser = require('body-parser')
// logging middleware for development
const {loggingRequest} = require('./middleware/loggingMiddleware')
const app = express()

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.use(loggingRequest)
// for development
app.use(morgan('combined'))
// User related routes
app.use(userRouter)

// configure logging middle ware


app.get('/hello', (req, res) => {
    res.send('Hello, World!');
  });

app.use('/', (req, res)=>{
    res.send('<h1>Testing...</h1>')
})

// for testing 
module.exports = app

app.listen(process.env.PORT || 1000,()=>console.log('Server is listing')) ;