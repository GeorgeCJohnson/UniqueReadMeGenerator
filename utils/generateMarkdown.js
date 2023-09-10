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

`;
}

module.exports = generateMarkdown;