// TODO: Create a function that returns a license badge based on which license is passed in
//Badge return for either no license or license
function renderLicenseBadge(license)  if (!license) {
  return '';
} else {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}; 

// TODO: Create a function to generate markdown for README
//Returning user input from questions.js
function generateMarkdown(data) {
  return `# ${data.title}
## License:
${renderLicenseBadge(data.license)}
## Table of Contents:
  ### [Table of Contents](#table-of-contents)
  ### [Description](#description)
  ### [Installation](#installation)
  ### [Usage](#usage)
  ### [Contribution](#contribution)
## Description:
  ### ${data.description}   
## Installation:
  ### ${data.installation}
## Usage:
  ### ${data.usage}
## Tests:
  ### ${data.tests}
## Contribution:
  ### ${data.contribution}
## GitHub:
  ### ${data.github}
## Questions:
  ### You can contact me at 
  ${data.email}        
} for any questions or comments.
`;
}

module.exports = generateMarkdown;