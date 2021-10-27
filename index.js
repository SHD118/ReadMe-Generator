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
            name: 'userName',
            message: 'Please your first and last name'
        },

        {
            type: 'list',
            choices: ["BSD 2-Clause License", "BSD 3-Clause License", "Apache 2.0 License", "none"], 
            name: 'badge',
            message: 'Please pick a license'
        },
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
            name: 'tests',
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

const dataForHTML = ({name , description, userName, installation, usage, license, badge, tests, email, github }) =>
`# ${name}
### ${userName}
## Description
${description}
<br/>
${renderBadge(badge)}
## Table of Contents
1. [ Description. ](#description)
2. [ Installation. ](#installation)
3. [ Usage. ](#usage)
4. [ License. ](#license)
6. [ Tests. ](#tests)
7. [ Questions. ](#questions)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Tests
  ${tests}
## Questions?

Want to see more of my work? [Github Link](https://github.com/${github})
<br/>
Want to learn more please contact me at ${email}
 `;

function renderBadge(answers) {
    // ["BSD 2-Clause License", "BSD 3-Clause License", "Apache 2.0 License"]
    if (answers === "BSD 2-Clause License") {
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
    }
    if (answers === "Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (answers === "BSD 3-Clause License") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    }
    if (answers === "none") {
        return "";
    }
}
const init = () => {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
      .then((userInput) => fs.writeFileSync('README.md', dataForHTML(userInput)))
      .then(() => console.log('Successfully wrote to README.MD'))
      .catch((err) => console.error(err));
  };
  
  init();

