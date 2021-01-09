// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const createMarkdown = `# ${response.appName}
      
## Description
${response.description}
## Installation
${response.installation}
## Usage         
${response.usage}
## Credits
${response.credits}
## License
`;
    fs.writeFile("generatedREADME.md", createMarkdown, (err) => {
      if (err) throw err;
      console.log("The file has been created!");
    });
  });
}
// Function call to initialize app
init();
