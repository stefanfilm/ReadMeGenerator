// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generateMarkdown = require ("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    { type: "input",
    name: "title",
    message: "What is your project title?"
},
{ type: "input",
    name: "description",
    message: "What is your project description?"
},
{ type: "input",
    name: "deployed",
    message: "What is the URL for the deployed website?"
},
{ type: "input",
    name: "installation",
    message: "How do you install your project?"
},
{ type: "input",
    name: "usage",
    message: "How do we use the application?"
},
{ type: "list",
name: "license",
message: "What license would you like your project to have?",
choices: ["MIT", "Apache 2.0", "GPL 3.0", "DSD 3", "none"]
},
    { type: "input",
    name: "GitHubUsername",
    message: "What is your GitHub username?"
},  
{ type: "input",
name: "email",
message: "What is your email address?"
},

{ type: "input",
name: "contributions",
message: "Who contributed to your project?"
},

{ type: "input",
name: "tests",
message: "Are there any tests to run?"
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)    
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((readMeResults)=>
    {
console.log(readMeResults);
const markdown = generateMarkdown(readMeResults);
writeToFile("README.md", markdown)
})
}

// Function call to initialize app
init();
