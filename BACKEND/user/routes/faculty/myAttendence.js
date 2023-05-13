const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const router = express.Router()


router.get('/', (request, response) => {
    const statement = `select fa.date, fa.courseName, fa.semester, fa.year, fa.subjectName, fa.status,
                        fa.facultyId, f.facultyName  from faculty_attendence fa inner join faculty f on fa.facultyId = f.facultyId`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})






module.exports = router