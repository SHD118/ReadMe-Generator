const inquirer = require('inquirer');
const fs = require('fs');
var temp;
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
            name: 'userName',
            message: 'Please your first and last name'
        },

        // {
        //     type: 'input',
        //     name: 'tOC',
        //     message: 'Please add a table of content'
        // },
        {
            type: 'input',
            name: 'installation',
            message: 'Please at installation instructions'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add detail on the usage'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please add detail on the license'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please add any testing information'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please add email link'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please add github link'
        },

    ])
}

const dataForHTML = ({name , description, userName, installation, usage, license, tests, email, github }) =>
`# ${name}
### ${userName}
<a name="description"></a>
## Description
${description}  
## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
6. [ Tests. ](#testsection)
7. [ Questions. ](#questions)
<a name="installsection"></a>
## Installation
${installation}
<a name="usage"></a>
## Usage
${usage}
<a name="license"></a>
## License
${license}
<a name="tests"></a>
## Tests
  ${tests}
  <a name="questions"></a>
## Questions?
    Want to see more of my work? [Click here!](https://github.com/${github})
    Want to learn more please contact me at ${email}
 `;


const init = () => {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
      .then((userInput) => fs.writeFileSync('index.html', dataForHTML(userInput)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();

