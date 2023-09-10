// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const questions = require('./utils/questions.js');
// TODO: Create an array of questions for user input
// not needed
// const questions = [];

// TODO: Create a function to initialize app
function init() {}
//Initializes the questions
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    });
}
// TODO: Create a function to write README file
// not needed included above:
//function writeToFile(fileName, data) {}



// Function call to initialize app
init();