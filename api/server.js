require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const Courses = require('./api/models/courses')
const coursesRouter = require('./routes/coursesRouter')

// Create our Express server
const server = express()


// configure app for bodyparser()
//lets us grab data from the body of POST
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

//connect to mongoose
// mongoose.connect('mongodb://localhost:27017/yana')

//api routes
const router = express.Router()

//

// // middleware
// server.use(functon(req, res, next) {
//   next()
// })

server.use(coursesRouter)

// router.route('/courses')
//   .post(function(req, res) {
//     const newCourse = new Course()  //new couurse Add
//     newCourse.level = req.body.level
//     newCourse.course = req.body.course
//     newCourse.image = req.body.image
//     newCourse.words = req.body.words
//
//     newCourse.save(function(err) {
//       if (err) { res.send(err) }
//       res.json({message:"New course added!!"})
//     })
//   })
//
//   .get(function(req, res) {
//     Course.find(functon (err, courses) {
//       if (err) { res.send(err) }
//       res.json(courses)
//     })
//   })
//
// router.route('/course/:course_id')
//   .get(function(req, res) {
//     Course.findById(req.params.course_id, function(err, course) {
//       if (err) { res.send(err) }
//       res.json(course)
//     })
//   })
//
//   router.route('/course/image/:image')
//     .get(function(req, res) {
//       Course.find({image:req.params.image}, function(err, course) {
//         if (err) { res.send(err) }
//         res.json(course)
//       })
//     })
//
//     router.route('/course/word/:word')
//       .get(function(req, res) {
//         Course.find({word:req.params.word}, function(err, course) {
//           if (err) { res.send(err) }
//           res.json(course)
//         })
//       })
//
//       router.route('/course/level/:level')
//         .get(function(req, res) {
//           Course.find({level:req.params.level}, function(err, course) {
//             if (err) { res.send(err) }
//             res.json(course)
//           })
//         })

//Start server
const port = 8000
server.listen(port, () => {
  console.log(`API server is running on port ${port}`)
})
