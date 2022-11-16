// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    Public:
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]",
    None: "",
  };

  if (!license) {
    ("");
  }
  if (license) {
    console.log("mkdwn line 18: >>", license);
    return badge;
  }
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
  if (!license) {
    ("");
  }
  if (license) {
    return URL;
  }
  console.log("mkdwn line 36: >>", license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    ("");
  }
  if (license) {
    return renderLicenseBadge(license).concat(renderLicenseLink(license));
  }
  // console.log("mkdwn line 49: >>", renderLicenseSection(license));
}

// TODO: Create a function to generate markdown for README
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
  } = data;
  return `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

This project is under the ${renderLicenseSection(license)}.

## Features

${features}

## How to Contribute

${contribute}

## Tests

${tests}
`;
}

module.exports = generateMarkdown;
