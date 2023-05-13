const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const router = express.Router()


router.get('/', (request, response) => {
    const statement = `select t.courseName, t.semester, t.year, t.lecture_no, t.days, t.subjectName, 
                       t.facultyId, f.name from timeTable t inner join faculty f on t.facultyId = f.facultyId`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})





module.exports = router