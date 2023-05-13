const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')

const router = express.Router()


router.get('/approve-facultys', (request, response) => {
    const statement = `select facultyId, name , address , phone , 
                       email ,appprove from faculty where isActive = 1`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put('/update-state/:id/:appprove', (request, response) => {
    const { id, appprove } = request.params
    const statement = `update faculty set 
        appprove = ${appprove}
      where facultyId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router