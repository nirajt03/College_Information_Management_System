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


router.post('/', (request, response) => {
    const { date, courseName, semester, year, subjectName, status, facultyId } = request.body
    const statement = `insert into faculty_attendence ( date, courseName, semester, year, subjectName, status, facultyId)  
                     values ('${date}', '${courseName}', '${semester}', '${year}', '${subjectName}', '${status}'), '${facultyId}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/:id', (request, response) => {
    const { id } = request.params
    const { date, courseName, semester, year, subjectName, status, facultyId } = request.body
    const statement = `update faculty_attendence set date = '${date}' , courseName = '${courseName}', semester = '${semester}', 
                    year = '${year}', subjectName = '${subjectName}', status = '${status}, facultyId = '${facultyId}'
                     where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from faculty_attendence where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



module.exports = router