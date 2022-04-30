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
    message: "what are your table of contents",
    type: 'input',
    name: 'table of contents',
  },
  {
    message: "what instilation will or did you use for this project",
    type: 'input',
    name: 'instillations',
  },
  {
    message: "what is the purpose of this project",
    type: 'input',
    name: 'usage',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'AGPL', 'GPLv2', 'BSD 3', 'None'],
  },
  {
    message: "what are the contributions to the project",
    type: 'input',
    name: 'contribution',
  },
  {
    message: "test Guidelines",
    type: 'input',
    name: 'Test',
  },
  {
    message: "what is your github,linkin and email",
    type: 'input',
    name: 'Questions',
  },
]
inquirer.prompt(questions)
.then(answers =>{  
  console.log(answers)
})
.catch(err=> console.log(err))




