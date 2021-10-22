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
            name: 'email',
            message: 'Please add email link'
        },
        {
            type: 'input',
            // table of content
            name: 'github',
            message: 'Please add github link'
        },
        {
            type: 'input',
            // table of content
            name: 'Link',
            message: 'Please add deployable link'
        },
    ])
}

const dataForHTML = ({name , description, tOC, installation, usage, tests, questions}) =>
`# ${name}
<a name="descsection"></a>
## Description
${description}  
## Table of Contents
1. [ Description. ](#descsection)
2. [ Installation. ](#installsection)
3. [ Usage. ](#usagesection)
4. [ License. ](#licensesection)
5. [ Contributing. ](#contribsection)
6. [ Tests. ](#testsection)
7. [ Questions. ](#questionssection)
<a name="installsection"></a>
## Installation
${installation}
<a name="usagesection"></a>
## Usage
${usage}
<a name="licensesection"></a>
## License
  <a name="contribsection"></a>
## Contributing
  
  <a name="testsection"></a>
## Tests
  ${tests}
  <a name="questionssection"></a>
## Questions?
    Want to learn more please contact me at ${email}
 `;


const init = () => {
    promptUser()
    // Use writeFileSync method to use promises instead of a callback function
      .then((name) => fs.writeFileSync('index.html', dataForHTML(name)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();

