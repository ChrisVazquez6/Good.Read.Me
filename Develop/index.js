const fs = require('fs');
const path =require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

const questions =[
  {
    message:"what is your project name?",
    type:'input',
    name:'title',
  }
]
inquirer.prompt(questions)
.then(answers =>{
  console.log(answers)
})
.catch(err=> console.log(err))




