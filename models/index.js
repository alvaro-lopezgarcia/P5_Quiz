const path = require('path');
//const quiz = require('quiz');
// Load ORM
const Sequelize = require('sequelize');
const sqlite3 = require('sqlite3');
const sequelize = new Sequelize("sqlite:quizzes.sqlite",{logging:false});
// To use SQLite data base:
// DATABASE_URL = sqlite:quiz.sqlite
// To use Heroku Postgres data base:
// DATABASE_URL = postgres://user:passwd@host:port/database
//const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";
sequelize.define('quiz',{
question:{
type:Sequelize.STRING,
unique:{msg:"Ya existe esta pregunta"},
validate:{notEmpty:{msg:"La pregunta no puede estar vacía"}}
},
answer:{
type:Sequelize.STRING,
validate:{notEmpty:{msg:"La pregunta no puede estar vacía"}}
}
});
//creamos la base de datos quiz
//quiz.function(sequelize, Sequelize);
sequelize.sync()
.then(()=>sequelize.models.quiz.count())
.then(count=>{
if(!count){
return sequelize.models.quiz.bulkCreate([
{question:"Capital de Italia",answer:"Roma"},
{question:"Capital de Francia",answer:"París"},
{question:"Capital de España",answer:"Madrid"},
{question:"Capital de Portugal",answer:"Lisboa"},
])
}
})
.catch(error=>{
console.log(error);
}); 
module.exports = sequelize;
