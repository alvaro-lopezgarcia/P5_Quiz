var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");
const{models}=require("../models");

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title:'Quiz'});
});

// Author page.
router.get('/author', (req, res, next) => {
    res.render('author');
});

//Credits page
router.get('/credits', (req, res, next) =>{
res.render('credits',{title:'Credits'});
});

//Quizzes page
router.get('/quizzes', (req, res, next) =>{
models.quiz.findAll()
.then(quizzes=>{
res.render('quizzes',{quizzes});
})
.catch(error=>next(error));
});

module.exports = router;
