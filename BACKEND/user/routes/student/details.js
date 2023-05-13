const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/SSC', (request, response) => {
    const statement = `select sscCourse,sscBoard, sscYOP, sscAggregate  from sscDetails where studentId = '${request.userId}'
  `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post('/addSSC', (request, response) => {

    const { sscCourse, sscBoard, sscYOP, sscAggregate } = request.body
    const statement = `insert into sscDetails (studentId,sscCourse,sscBoard, sscYOP, sscAggregate) values (
      '${request.userId}','${sscCourse}', '${sscBoard}', '${sscYOP}', '${sscAggregate}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/updateSSC', (request, response) => {
    const { id } = request.params
    const { sscCourse, sscBoard, sscYOP, sscAggregate } = request.body
    const statement = `update sscDetails set 
        sscCourse = '${sscCourse}',
        sscBoard = '${sscBoard}',
        sscYOP = '${sscYOP}',
        sscAggregate = '${sscAggregate}'
        where studentId =  ${request.userId}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/HSC', (request, response) => {
    const statement = `select hscCourse,hscBoard, hscYOP, hscAggregate from hscDetails where studentId = '${request.userId}'
  `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.post('/addHSC', (request, response) => {

    const { hscCourse, hscBoard, hscYOP, hscAggregate } = request.body
    const statement = `insert into hscDetails (studentId,hscCourse,hscBoard, hscYOP, hscAggregate) values (
      '${request.userId}','${hscCourse}', '${hscBoard}', '${hscYOP}', '${hscAggregate}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})



router.put('/updateHSC', (request, response) => {
    const { id } = request.params
    const { hscCourse, hscBoard, hscYOP, hscAggregate } = request.body
    const statement = `update hscDetails set 
        hscCourse = '${hscCourse}',
        hscBoard = '${hscBoard}',
        hscYOP = '${hscYOP}',
        hscAggregate = '${hscAggregate}'
        where studentId =  '${request.userId}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/Diploma', (request, response) => {
    const statement = `select Course, university, YOP, Aggregate  from diplomaDetails where studentId = '${request.userId}'
  `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.post('/addDiploma', (request, response) => {

    const { Course, university, YOP, Aggregate } = request.body
    const statement = `insert into diplomaDetails ( studentId, Course, university, YOP, Aggregate) values (
      '${request.userId}','${Course}', '${university}', '${YOP}', '${Aggregate}'
    )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/updateDiploma', (request, response) => {
    const { id } = request.params
    const { Course, university, YOP, Aggregate } = request.body
    const statement = `update sscDetails set 
        Course = '${Course}',
        university = '${university}',
        YOP = '${YOP}',
        Aggregate = '${Aggregate}'
        where studentId =  ${request.userId}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.get('/news-details', (request, response) => {
    const statement = `select * from announcements`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.get('/attendence-details', (request, response) => {
    const { id } = request.params
    const statement = `select a.date, s.subjectName,s.courseName, a.status from attendence a inner join subject s on a.subjectId = s.subjectId
    where studentId = '${request.userId}';`

    //select a.date, s.subjectName,s.courseName, a.status from attendence a inner join subject s on a.studentId = s.studentId ;


    // select a.date, a.subjectName, a.status from attendence a inner join  subject s 
    // on a.courseName = s.courseName where studentId = '${request.userId}'
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/faculty-details', (request, response) => {
    const statement = `
    select f.name, f.address, f.phone, f.email, f.subjectName from faculty f inner join student s on f.subjectName = s.subjectName
    where studentId = '${request.userId}';`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// router.get('/subjectDetails', (request, response) => {
//     const statement = `  `
//     t.courseName, c.name, c.location as company_location, c.phone, c.email, j.salary, j.location as job_location, j.technology, j.desgination
//     from technicalDetails t
//     inner join company c on t.appliedCompany = c.companyId
//     inner join job j on c.companyId = j.companyId
//     where t.studentId = $ { request.userId }
//     and t.placementStatus = 1
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

router.get('/schedule-details', (request, response) => {
    const { id } = request.params
    const statement = `
            SELECT s1.courseName, s1.subjectName, f1.name, t1.date, t1.allotedTime, t1.semester, t1.timing
            FROM student s1 INNER JOIN faculty f1 ON s1.courseName = f1.courseName
            INNER JOIN timeTable t1 on t1.courseName = f1.courseName
            where studentId = '${ request.userId }';
            `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/student-details', (request, response) => {
    const { id } = request.params
    const statement = `
            Select * from student
            `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


module.exports = router