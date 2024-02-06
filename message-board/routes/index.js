const express = require('express');
const router = express.Router();


const messages = [
  {
    text: "Hello there!",
    user: "Jane",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/display', function(req, res, next) {
  res.render('display', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {



});


module.exports = router;
