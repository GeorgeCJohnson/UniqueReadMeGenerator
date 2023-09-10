//Questions requiring user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }          
    },
    {   
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {   
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Will there be an image file? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines for your project. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions for your project. (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project. (Required)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select a license for your project!');
                return false;
            }
        }
    }
];

// Checks for the file location.  Assistance received from Nina Mahdawe on this function.
function writeToFile(fileLocation, data) {
    if (fileLocation.charAt(fileLocation.length - 1) !== "/") {
        fileLocation += "/"
    }
    fs.writeFileSync(`${fileLocation}README.md`, data)

}

// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to the README generator!")
    const answers = await askQuestions()
    const markDown = generateMarkdown(answers)
    console.log(markDown)
    writeToFile(answers.location, markDown)
}
async function askQuestions() {
    const answers = await inquirer.prompt(questions)
    console.log(answers)
    return answers;
}

//Exporting questions
module.exports = questions; 