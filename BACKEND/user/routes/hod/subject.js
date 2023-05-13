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


router.post('/', (request, response) => {
    const { subjectCode, subjectName, theoryMarks, practicalMarks, courseName } = request.body
    const statement = `insert into subject ( subjectCode, subjectName, theoryMarks, practicalMarks, courseName )  
                     values ('${subjectCode}', '${subjectName}', '${theoryMarks}', '${practicalMarks}', '${courseName}')`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/:id', (request, response) => {
    const { id } = request.params
    const { subjectCode, subjectName, theoryMarks, practicalMarks, courseName } = request.body
    const statement = `update subject set subjectCode = '${subjectCode}' , subjectName = '${subjectName}', theoryMarks = '${theoryMarks}', 
                    practicalMarks = '${practicalMarks}', courseName = '${courseName}' where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from subject where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



module.exports = router