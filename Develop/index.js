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
    choices: ['MIT', 'AGPL', 'GPLv2', 'Apache 2.0', 'None'],
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
    message: "what is your github",
    type: 'input',
    name: 'Questions',
  },
]
inquirer.prompt(questions)
.then(answers =>{  
  console.log(answers)
  let readme1 =`<img src= "https://img.shields.io/badge/${answers.license}-blue.svg">\
<h1>${answers.title}</h1>
<p>${answers.description}</p>
<p>Table of Cont</p>
<details open='open'>
<summary>Table of Cont</summary>
<ol>
<li><a href='#Installation'>Installation</a></li>
<li><a href='#Usage'>Usage</a></li>
<li><a href='#contributions'>Contributions</a></li>
<li><a href='#test'>Test</a></li>
<li><a href='#questions'>Questions</a></li>
</details>
<h3 id='Installation'>Installation</h3>
<p>${answers.instillations}</p>

<h3 id='Usage'>Usage</h3>
<p>${answers.usage}</p>

<h3 id='contributions'>Contributions</h3>
<p>${answers.contribution}</p>

<h3 id='test'>Test</h3>
<p>${answers.Test}</p>

<h3 id='questions'>Questions</h3>
<p>for any questions contact me on github at ${answers.questions}</p>
`
  fs.writeFile('readme1.md',readme1, err=>console.log(err))
})
.catch(err=> console.log(err))




