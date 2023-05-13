const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')

const router = express.Router()


router.get('/approve-faculty', (request, response) => {
    const statement = `select facultyId, name  , DateOfBirth , gender , address , phone , 
                       email , profilePic ,approve from faculty where isActive = 1`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.put('/update-state/:id/:approve', (request, response) => {
    const { id, approve } = request.params
    const statement = `update faculty set 
        approve = ${approve}
      where facultyId = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router