const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const router = express.Router()


router.get('/', (request, response) => {
    const statement = `select subjectCode, subjectName, theoryMarks, practicalMarks, courseName from subject`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router