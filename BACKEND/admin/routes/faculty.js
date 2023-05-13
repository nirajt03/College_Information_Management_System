const express = require('express')
const utils = require('../../utils')
const db = require('../../db')

const router = express.Router()

router.get('/', (request, response) => {
    const statement = `select facultyId , name , courseName , phone , email , isActive  from faculty`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/update-state/:id/:isActive', (request, response) => {
    const { id, isActive } = request.params
    const statement = `update faculty set 
        isActive = ${isActive}
      where facultyId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router