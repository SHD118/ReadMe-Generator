const inquirer = require('inquirer');
const fs = require('fs');

// create an command line application that dunamically generates a professional ReadMe

// requirements
//project title , description, table of content, installation, usage info, tests and questions

// implement user input collection via inquirer

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What do you want to call the repository?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description'
        },

        {
            type: 'input',
            name: 'tOC',
            message: 'Please add a table of content'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please at installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add detail on the usage detail'
        },
        {
            type: 'input',
            // table of content
            name: 'test',
            message: 'Please add any testing information'
        },
        {
            type: 'input',
            // table of content
            name: 'questions',
            message: 'Please add any questions'
        },
    ])
}