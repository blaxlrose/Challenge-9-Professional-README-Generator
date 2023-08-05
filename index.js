// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require(fs)
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do users use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors for this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can users run tests for your project?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can users get in touch with questions?'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
        } else {
            console.log(`README has been created!`);
        }
    });
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
