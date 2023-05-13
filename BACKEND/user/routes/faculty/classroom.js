const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

// router.get('/', (request, response) => {
//     const statement = 'select * from Classroom;'
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

router.get('/', (request, response) => {
    const statement = 'select c.venue, c.size, f.name, f.courseName, c.timing from Classroom c inner join faculty f where c.facultyId = f.facultyId'
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



module.exports = router