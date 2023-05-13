const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// morgan: for logging
const morgan = require('morgan')



// routers
const userStudentRouter = require('./user/routes/student/student')
const userStudentDetails = require('./user/routes/student/details')
const userPrincipalRouter = require('./user/routes/principal/principal')
const userPrincipalDetails = require('./user/routes/principal/details')
const userHodRouter = require('./user/routes/hod/hod')
const userFacultyRouter = require('./user/routes/faculty/faculty')
const userPrincipalList = require('./user/routes/principal/list')
const userHodList = require('./user/routes/hod/list')
const userHodClassroom = require('./user/routes/hod/classroom')
const userFacultyClassroom = require('./user/routes/faculty/classroom')
const userHodDetails = require('./user/routes/hod/details')
const userFacultyNews = require('./user/routes/faculty/myNews')
const userFacultyDetails = require('./user/routes/faculty/details')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())
app.use(morgan('combined'))



// add a middleware for getting the id from token
function getUserId(request, response, next) {

    if (request.url == '/student/signin' ||
        request.url == '/student/signup' ||
        request.url == '/hod/signin' ||
        request.url == '/hod/signup' ||
        request.url == '/faculty/signin' ||
        request.url == '/faculty/signup' ||
        request.url == '/principal/signin' ||
        request.url == '/principal/signup'
    ) {
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
app.use('/student', userStudentRouter)
app.use('/details', userStudentDetails)
app.use('/principal', userPrincipalRouter)
app.use('/details', userPrincipalDetails)
app.use('/hod', userHodRouter)
app.use('/faculty', userFacultyRouter)
app.use('/details', userFacultyDetails)
app.use('/principal-list', userPrincipalList)
app.use('/hod-list', userHodList)
app.use('/hod-classroom', userHodClassroom)
app.use('/faculty-classroom', userFacultyClassroom)
app.use('/details', userHodDetails)
app.use('/faculty-news', userFacultyNews)


// default route
app.get('/', (request, response) => {
    response.send('welcome to my application')
})

app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
})