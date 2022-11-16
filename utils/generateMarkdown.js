// generates the license badge
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
    return badge[license];
  }
}

// generates the license URL
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
    return URL[license];
  }
}

// combines the badge and URL sections
function renderLicenseSection(license) {
  if (!license) {
    ("");
  }
  if (license) {
    return `This project is under the ${renderLicenseBadge(
      license
    )}${renderLicenseLink(license)}.`;
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

${renderLicenseSection(license)}

## Features

${features}

## How to Contribute

${contribute}

## Tests

${tests}
`;
}

module.exports = generateMarkdown;
