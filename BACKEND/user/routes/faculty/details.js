const express = require('express')
const utils = require('../../../utils')
const db = require('../../../db')
const config = require('../../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('../../../mailer')
const fs = require('fs')

const router = express.Router()



router.get('/details/:id', (request, response) => {
    const { id } = request.params
    const statement = `
        select p.id, p.title, p.description,
          c.id as categoryId, c.title as categoryTitle,
          b.id as brandId, b.title as brandTitle,
          p.price, p.image, p.isActive from product p
        inner join category c on c.id = p.category
        inner join brand b on b.id = p.brand
        where p.id = ${id}
    `
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const products = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpProduct = data[index];
                const product = {
                    id: tmpProduct['id'],
                    title: tmpProduct['title'],
                    description: tmpProduct['description'],
                    price: tmpProduct['price'],
                    isActive: tmpProduct['isActive'],
                    brand: {
                        id: tmpProduct['brandId'],
                        title: tmpProduct['brandTitle']
                    },
                    category: {
                        id: tmpProduct['categoryId'],
                        title: tmpProduct['categoryTitle']
                    },
                    image: tmpProduct['image']
                }
                products.push(product)
            }

            response.send(utils.createSuccess(products))
        }

    })
})

router.get('/getNews/:id', (request, response) => {
    const { id } = request.params
    const statement = `
        select id, notice, description from announcements where id = '${id}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/getNews', (request, response) => {

    const statement = `
        select id, notice, description from announcements`
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const announcements = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpAnnouncement = data[index];
                const announcement = {
                    id: tmpAnnouncement['id'],
                    notice: tmpAnnouncement['notice'],
                    description: tmpAnnouncement['description']
                }
                announcements.push(announcement)
            }

            response.send(utils.createSuccess(announcements))
        }

    })
})


router.post('/insertNews', (request, response) => {
    const { notice, description } = request.body
    const statement = `insert into announcements (notice, description ) values (
      '${notice}', '${description}' )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/updateNews/:id', (request, response) => {
    const { id } = request.params
    const { notice, description } = request.body

    const statement = `update announcements set 
        notice = '${notice}',
        description = '${description}'
        where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.delete('/:id', (request, response) => {
    const { id } = request.params
    const statement = `delete from announcements where id = ${id}`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/getSchedule/:id', (request, response) => {
    const { id } = request.params
    const statement = `
        select courseName, subjectName, timing, lecture_no, allotedTime, semester, date from timeTable where id = '${id}'`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/getSchedule', (request, response) => {

    const statement = `
        select courseName, subjectName, timing, lecture_no, allotedTime, semester, date from timeTable`
    db.query(statement, (error, data) => {
        if (error) {
            response.send(utils.createError(error))
        } else {
            // empty products collection
            const announcements = []

            // iterate over the collection and modify the structure
            for (let index = 0; index < data.length; index++) {
                const tmpSchedule = data[index];
                const schedule = {
                    courseName: tmpSchedule['courseName'],
                    subjectName: tmpSchedule['subjectName'],
                    timing: tmpSchedule['timing'],
                    lecture_no: tmpSchedule['lecture_no'],
                    allotedTime: tmpSchedule['allotedTime'],
                    semester: tmpSchedule['semester'],
                    date: tmpSchedule['date']
                }
                schedule.push(schedule)
            }

            response.send(utils.createSuccess(schedule))
        }

    })
})


router.post('/insertSchedule', (request, response) => {
    const { courseName, subjectName, timing, lecture_no, allotedTime, semester, date } = request.body
    const statement = `insert into timeTable (courseName, subjectName, timing, lecture_no, allotedTime ,semester, date) values (
      '${courseName}', '${subjectName}', '${timing}', '${lecture_no}', '${allotedTime}', '${semester}', '${date}' )`
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})


router.put('/updateSchedule/:id', (request, response) => {
    const { id } = request.params
    const { courseName, subjectName, timing, lecture_no, allotedTime, semester, date } = request.body

    const statement = `update timeTable set 
        courseName = '${courseName}',
        subjectName = '${subjectName}'
        timing = '${timing}',
        lecture_no = '${lecture_no}'
        allotedTime = '${allotedTime}',
        semester = '${semester}',
        date = '${date}',
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

router.get('/student-details', (request, response) => {
    const statement = `
    select s.name, s.address, s.phone, s.email, s.courseName from student s inner join courses c on s.courseName = c.courseName;

    `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/news-details', (request, response) => {
    const statement = `
    select notice, description from announcement;

    `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

router.get('/schedule-details', (request, response) => {
    const statement = `
    select f.courseName, f.subjectName, f.name, t.date, t.allotedTime, t.semester, t.timing from faculty f inner join timeTable t on f.courseName = t.courseName;

    `
    db.query(statement, (error, data) => {
        response.send(utils.createResult(error, data))
    })
})

// router.get('/schedule-details', (request, response) => {
//     const statement = `
//     SELECT  s1.courseName, s1.subjectName, f1.name, t1.date,t1.allotedTime, t1.semester, t1.timing 
//     FROM student s1 INNER JOIN faculty  f1 ON s1.courseName = f1.courseName
//     INNER JOIN timeTable t1 on t1.courseName = f1.courseName; `
//     db.query(statement, (error, data) => {
//         response.send(utils.createResult(error, data))
//     })
// })

module.exports = router