// DEPENDENCIES
//Link write file 
const { prompt } = require('inquirer');
const { writeFile } = require('fs');

// DATA
// bank of questions
const questions = [
        {
            //Title
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?'
        },
        {
            //Description
          type: 'input',
          name: 'description',
          message: 'Please provide a brief description of your project:'
        },
        {
            //Installation
          type: 'input',
          name: 'installation',
          message: 'What are the installation instructions for your project?'
        },
        {
            //Usage
          type: 'input',
          name: 'usage',
          message: 'How do you use your project?'
        },
        {
            //License
          type: 'list',
          name: 'license',
          message: 'Which license does your project use?',
          choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Other']
        },
        {
            //Contributing
          type: 'input',
          name: 'contributing',
          message: 'How can other developers contribute to your project?'
        },
        {
            //Tests
          type: 'input',
          name: 'tests',
          message: 'How do you run tests for your project?'
        },
        {
            //GitHub
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?'
        },
        {
            //Email
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
        }
      
];

// FUNCTIONS
//Include HTML skeleton, include bootsrap link 
const generateHTML = ({ title, description, installation, usage, license, contributing, tests, github, email }) => {
  const template = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <h1></h1>
      <div class="jumbotron">
        <h1 class="display-4">${description}</h1>
        <p class="lead">${installation}</p>
        <hr class="my-4" />
        <ul class="list-group">
          <li class="list-group-item">${usage}</li>
          <li class="list-group-item">${license}</li>
          <li class="list-group-item">${contributing}</li>
          <li class="list-group-item">${tests}</li>
          <li class="list-group-item">${github}</li>
          <li class="list-group-item">${email}</li>
        </ul>
      </div>
    </body>
  </html>
  `;
  return template;
};

const init = () => {
  // prompt the user to answer questions from our question bank
  prompt(questions).then((answers) => {
    
    // generate some html from the answers
    const html = generateHTML(answers);
    // write the html to a file
    writeFile('index.html', html, 'utf8', (err) =>
      err ? console.err(err) : console.log('success')
    );
  });
};

// USER INTERACTIONS
// INITIALIZATION
init();


