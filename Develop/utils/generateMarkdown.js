// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  
  if (license != "none"){
  return `![github License](https://img.shields.io/badge/license-${license.replace(" ","_")}-blue.svg)
  `
}
  return ""

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license != "none"){
    return `*  [License](#license)
    `
  }
    return ""
  
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none"){
  return `## License
  This project is licensed with the ${license} license.
  `
}
  return ""

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  *  [Description](#description)
  *  [Deployed](#deployed)
  *  [Installation](#installation)
  *  [Usage](#usage)
  ${renderLicenseLink (data.license)}
  *  [Contributions](#contributions)
  *  [Tests](#tests)
  *  [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Deployed
  ${data.deployed}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  You can contact me at ${data.email}
  My GitHub Username is ${data.GitHubUsername}
  
`;
}

module.exports = generateMarkdown;
