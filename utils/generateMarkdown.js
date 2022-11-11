// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let license = data.license; // data is not defined in global scope. but it is defined in the generateMarkdown function.

function renderLicenseBadge(license) {
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    Public:
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]",
    None: "",
  };
  const { license } = licenseBadge;

  // user selected license =
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const URL = {
    MIT: "(https://opensource.org/licenses/MIT)",
    GNU: "(https://www.gnu.org/licenses/gpl-3.0)",
    Public: "(https://opendatacommons.org/licenses/pddl/)",
    None: "",
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection()}

## Features

${data.features}

## How to Contribute

${data.contribute}

## Tests

${data.tests}
`;

  //
  fs.writeFile(
    "README.md",
    generateMarkdown(
      title,
      description,
      intallation,
      usage,
      credits,
      license,
      features,
      contribute,
      tests
    )
  );

  // writeToFile();???????????????
}

module.exports = generateMarkdown;
