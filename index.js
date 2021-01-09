// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your app?",
    name: "appName",
  },
  {
    type: "input",
    message: "Give a description for what your app does:",
    name: "description",
  },
  {
    type: "input",
    message: "How does a user install your app?",
    name: "installation",
  },
  {
    type: "input",
    message: "Can you explain how to use the app?",
    name: "usage",
  },
  {
    type: "input",
    message: "Anything in the app you'd like to give credit for?",
    name: "credits",
  },
  {
    type: "confirm",
    message: "Would you like to include an MIT license?",
    name: "license",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    if (response.license === true) {
      response.license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    const createMarkdown = `# ${response.appName}
      
# Description
${response.description}
# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)

## Installation <a name="installation"></a>
${response.installation}
## Usage <a name="usage"></a>        
${response.usage}
## Credits <a name="credits"></a>
${response.credits}
## License <a name="license"></a>
${response.license}`;

    fs.writeFile("generatedREADME.md", createMarkdown, (err) => {
      if (err) throw err;
      console.log("The file has been created!");
    });
  });
}
// Function call to initialize app
init();
