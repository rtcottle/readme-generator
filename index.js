const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require(`./utils/generateMarkdown`); //this is pulling the generateMarkdown function from the generateMarkdown.js.
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
    choices: ["MIT", "GNU", "Public", "Apache"],
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
  {
    name: "questions",
    type: "input",
    message: "Ask questions here:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
  return;
}

async function getPromptData() {
  return await inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
async function init() {
  const promptData = await getPromptData();
  const markdown = generateMarkdown(promptData);
  //test to make sure data is working.
  // console.log(markdown);
  writeToFile(`README.md`, markdown);
  console.log("Success!");
}

// Function call to initialize app
init();
