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


router.post('/', (request, response) => {
    const { courseName, semester, year, lecture_no, days, subjectName, facultyId } = request.body
    const statement = `insert into timeTable ( courseName, semester, year, lecture_no, days, subjectName ,facultyId )  
                     values ('${courseName}', '${semester}', '${year}', '${lecture_no}', '${days}', '${subjectName}', '${facultyId}')`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/:id', (request, response) => {
    const { id } = request.params
    const { courseName, semester, year, lecture_no, days, subjectName, facultyId } = request.body
    const statement = `update timeTable set courseName = '${courseName}' , semester = '${semester}', year = '${year}', 
                    lecture_no = '${lecture_no}', days = '${days}', subjectName = '${subjectName}, facultyId = '${facultyId}
                     where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from timeTable where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



module.exports = router