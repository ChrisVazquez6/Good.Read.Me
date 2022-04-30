const fs = require('fs');
const path =require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown');

const questions =[
  {
    message:"what is your project name?",
    type:'input',
    name:'title',
  },
  {
    message: "what is your project about?",
    type: 'input',
    name: 'description',
  },
  {
    message: "what instilation will or did you use for this project",
    type: 'input',
    name: 'instillations',
  },
  {
    message: "what is the purpose of this project",
    type: 'input',
    name: 'usuage',
  }, 
  {
    message: "license of the project",
    choices: ['MIT','AGPL','BSD 3', 'none','GPLv2']
    name: 'license',
  },
]
inquirer.prompt(questions)
.then(answers =>{  
  console.log(answers)
})
.catch(err=> console.log(err))




