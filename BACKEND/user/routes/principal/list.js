const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')

const router = express.Router()


router.get('/approve-hods', (request, response) => {
    const statement = `select hodId, name , address , phone , 
                       email ,appprove from hod where isActive = 1`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put('/update-state/:id/:appprove', (request, response) => {
    const { id, appprove } = request.params
    const statement = `update hod set 
        appprove = ${appprove}
      where hodId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router