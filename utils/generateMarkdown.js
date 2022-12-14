// generates the license badge
function renderLicenseBadge(license) {
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    Public:
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
  };

  if (!license) {
    ("");
  }
  if (license) {
    return badge[license];
  }
}

// generates the license URL
function renderLicenseLink(license) {
  const URL = {
    MIT: "(https://opensource.org/licenses/MIT)",
    GNU: "(https://www.gnu.org/licenses/gpl-3.0)",
    Public: "(https://opendatacommons.org/licenses/pddl/)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
  };
  if (!license) {
    ("");
  }
  if (license) {
    return URL[license];
  }
}

// combines the badge and URL sections
function renderLicenseSection(license) {
  if (!license) {
    ("");
  }
  //if there is a valid license, return badge and url
  if (license) {
    return `This project is under the ${renderLicenseBadge(
      license
    )}${renderLicenseLink(license)}.`;
  }
}

function renderQuestions(questions) {
  if (!questions) {
    ("");
  }
  if ((questions = "rtcottle")) {
    return `Reach me through my GitHub-rtcottle here: https://github.com/rtcottle`;
  }
  if ((questions = "betadev.2023@gmail.com")) {
    return `Contact me at my email: betadev.2023@gmail.com`;
  }
}

// this generates the markdown data with the user inputs
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    credits,
    license,
    features,
    contribute,
    tests,
    questions,
  } = data;
  return `# ${data.title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How To Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${renderLicenseSection(license)}

## Features

${features}

## How to Contribute

${contribute}

## Tests

${tests}

## Questions

${renderQuestions(questions)}
`;
}

module.exports = generateMarkdown;
