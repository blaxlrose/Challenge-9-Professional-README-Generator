// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [function userInput(){
    return inquirer.prompt([
    
    {type: 'input',
    name: 'title',
    message: 'What is the title of this Project?',
    },

    {type: 'input',
    name: 'description',
    message: 'What does this application do?',
    },

    {type: 'input',
    name: 'description',
    message: 'Why did you build this application?',
    },

    {type: 'input',
    name: 'description',
    message: 'What problem does it solve?',
    },

    {type: 'input',
    name: 'install',
    message: 'How do I install this application?',
    },

    {type: 'input',
    name: 'usage',
    message: 'How do I use this application?',
    },

    {type: 'input',
    name: 'collaborators',
    message: 'Were there any collaborators on this project?',
    choices:['Yes','No']},

    {type: 'input',
    name: 'contributing',
    message: 'How do I contribute to this project?',
    },
    
    {type: 'input',
    name: 'username',
    message: 'What is your Github username?',
    },

    {type: 'input',
    name: 'email',
    message: 'What is your e-mail?',
    },
    
    {type: 'input',
    name: 'testing',
    message: 'How do I test this application?',
    },

    {type: 'input',
    name: 'fileName',
    message: 'What do you want to call this readme?',
     },

    {type: 'checkbox',
    name: 'license',
    message: 'Select kind of license for this application:',
    choices: ["Academic Free License v3.0", "Apache license 2.0","GNU Affero General Public License v3.0","GNU General Public License v3.0", "GNU Lesser General Public License v3.0","MIT", "Mozilla Public License 2.0","The Unlicense",]},
])}];

// TODO: Create a function to write README file
function writeToFile(fileName, data){ 
fs.writeFile(`./dist/${fileName}`, data, err => {
    if (err) {
        throw err
    };
    console.log('Your README is done!')
});
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};
// Function call to initialize app
init()
.then(userResponse => {
    if (Response.contents.indexOf('Credits') > -1) {
        return addCredits(Response);
    } else {
        return response;
    }
})
.then(answers => generateMarkdown(answers))
.then(generatedReadme => writeToFile('README.md', generatedReadme))
    .cath(err => {
        console.log(err);
    });
