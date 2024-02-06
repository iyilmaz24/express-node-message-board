const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "Jane",
    added: new Date().toDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toDateString()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// displaying all messages
router.get('/display', function(req, res, next) {
  res.render('display', { title: 'Mini Message Board', messages: messages });
});


// creating a new message
router.get('/new', function(req, res, next) {
  res.render('form')
});
router.post('/new', function(req, res, next) {
  messages.push({text:req.body.messageI, user:req.body.nameI, added: new Date().toDateString()})
  res.redirect('/display')
});


module.exports = router;
