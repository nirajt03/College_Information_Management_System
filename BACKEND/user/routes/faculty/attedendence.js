const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const router = express.Router()


router.get('/', (request, response) => {
    const statement = `select a.date, a.courseName, a.semester, a.year, a.subjectName, a.status,
                        a.studentId, s.studentName  from attendence a inner join student s on a.studebtId = s.studentId`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.post('/', (request, response) => {
    const { date, courseName, semester, year, subjectName, status } = request.body
    const statement = `insert into attendence ( date, courseName, semester, year, subjectName, status, studentId)  
                     values ('${date}', '${courseName}', '${semester}', '${year}', '${subjectName}', '${status}'), '${studentId}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/:id', (request, response) => {
    const { id } = request.params
    const { date, courseName, semester, year, subjectName, status, studentId } = request.body
    const statement = `update attendence set date = '${date}' , courseName = '${courseName}', semester = '${semester}', 
                    year = '${year}', subjectName = '${subjectName}', status = '${status}, studentId = '${studentId}'
                     where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from attendence where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



module.exports = router