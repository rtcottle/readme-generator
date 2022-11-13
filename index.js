const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require(`./utils/generateMarkdown`); //this is pulling the generateMarkdown function from the generateMarkdown.js.

const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What is a brief description?",
  },
  {
    name: "installation",
    type: "input",
    message: "How do you install your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "What is it's use?",
  },
  {
    name: "credits",
    type: "input",
    message: "Who needs credit for helping you?",
  },
  {
    name: "license",
    type: "list",
    message: "What license is being used?",
    choices: ["MIT", "GNU", "Public", "None"],
  },
  {
    name: "features",
    type: "input",
    message: "What features does your project have?",
  },
  {
    name: "contribute",
    type: "input",
    message: "How can someone contribute to the project?",
  },
  {
    name: "tests",
    type: "input",
    message: "How can the project be tested?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // const fileName = "README.md"; TODO: ask why this is the way it is.
  inquirer.prompt(questions).then((data) => {
    // const markdown = generateMarkdown(data); TODO: ask why this isn't coming over.
    console.log(markdown);
    console.log("answers from questions line 5 >>:", data);
    (err) => (err ? console.error(err) : console.log("Success"));
    fs.writeFile(fileName, JSON.stringify(markdown));
  });

  return;
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
