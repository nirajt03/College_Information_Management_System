const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// morgan: for logging
const morgan = require('morgan')

// routers
const adminRouter = require('./admin/routes/admin')
const studentRouter = require('./admin/routes/student')
const HODRouter = require('./admin/routes/hod')
const facultyRouter = require('./admin/routes/faculty')

const app = express()
app.use(cors('*'))

app.use(bodyParser.json())
app.use(morgan('combined'))


// add a middleware for getting the id from token
function getUserId(request, response, next) {

    if (request.url == '/admin/signin'
        || request.url == '/admin/signup') {
        // do not check for token 
        next()
    } else {

        try {
            const token = request.headers['token']
            const data = jwt.verify(token, config.secret)

            // add a new key named userId with logged in user's id
            request.userId = data['id']

            // go to the actual route
            next()

        } catch (ex) {
            response.status(401)
            response.send({ status: 'error', error: 'protected api' })
        }
    }
}

app.use(getUserId)
// required to send the static files in the directory named images
app.use(express.static('images/'))

// add the routes
app.use('/admin', adminRouter)
app.use('/student', studentRouter)
app.use('/HOD', HODRouter)
app.use('/faculty', facultyRouter)

// default route
app.get('/', (request, response) => {
    response.send('Welcome to my CIMS')
})

app.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000')
})
