// TODO: Create a function that returns a license badge based on which license is passed in
//Badge return for either no license or license
function renderLicenseBadge(license)  if (!license) {
  return '';
} else {
  let licenseEndpoint;
  let licenseColor;
  if (license === "Eclipse") {
    licenseEndpoint = "epl-1-0";
    licenseColor = "red";
  } else if (license === "Apache") {
    licenseEndpoint = "Apache-2.0";
    licenseColor = "blue";
  } else if (license === "GNU GPL") {
    licenseEndpoint = "gpl-3.0";
    licenseColor = "blue";
  } else if (license === "MIT") {
    licenseEndpoint = "MIT";
    licenseColor = "yellow";
  } else if (license === "Mozilla") {
    licenseEndpoint = "MPL-2.0";
    licenseColor = "brightgreen";
  } else {
    licenseEndpoint = "";
    licenseColor = "";
  }
  return `[![${license}](https://img.shields.io/badge/License-${license}-${licenseColor}.svg)](https://opensource.org/license/${licenseEndpoint})`;
}
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