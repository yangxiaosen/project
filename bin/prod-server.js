/**
 * Created by luqianyu on 2017/1/2.
 */
const project = require('../config/project.config')
// const app = require('../server/main')
const app = require('../server/authentication')
const debug = require('debug')('app:bin:dev-server')
//
// //数据库相关
// const mongoose = require('mongoose')
// mongoose.connection.on('error', console.error);
// mongoose.connect('mongodb://localhost/arluber')
//
// var userSchema = new mongoose.Schema({
//   userID: String,
//   userPW: String,
//   userData: Object
// });
// var User = mongoose.model('User', userSchema)
//
// function createUser(id, pw, data) {
//   var temp = new User({id,pw,data})
//
//   temp.save(function (err, temp) {
//     if (err) console.log(err)
//     console.dir(temp);
//   })
// }
// createUser('arluber','dhrsqj123',{msg: "fuckyou"})
//
// var thor = new Movie({
//   title: 'Thor'
//   , rating: 'PG-13'
//   , releaseYear: '2011'
// Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//   , hasCreditCookie: true
// });
// thor.save(function(err, thor) {
//   if (err) return console.error(err);
//   console.log(thor);
// });
//
//
//
// User.findOne({ userID: 'arluber' }, function(err, User) {
//   if (err) return console.error(err);
//   console.log(User);
// });

//* **********************************
// app.use(authentication)
project.env = 'production'
app.listen(project.server_port)
debug(`Server is now running at http://localhost:${project.server_port}.`)
