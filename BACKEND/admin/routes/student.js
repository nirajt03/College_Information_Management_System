const express = require('express')
const utils = require('../../utils')
const db = require('../../db')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `select studentId , name , gender , address  , phone , email , isActive from student`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/update-state/:id/:isActice', (request, response) => {
    const { id, isActice } = request.params
    const statement = `update student set 
        isActice = ${isActice}
      where studentId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/all-student-count', (request, response) => {
    const statement = `SELECT COUNT(studentId) as countNo FROM student`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})
router.get('/all-hod-count', (request, response) => {
        const statement = `SELECT COUNT(hodId) as countNo FROM hod`
        db.query(statement, (error, data) => {
            response.send(utils.createResult(error, data))
        })
    })
    
router.get('/all-faculty-count', (request, response) => {
    const statement = `SELECT COUNT(facultyId) as countNo FROM faculty`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})




module.exports = router