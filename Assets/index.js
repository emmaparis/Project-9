// DEPENDENCIES
const { prompt } = require('inquirer');
const { writeFile } = require('fs');

// DATA
// bank of questions
const questions = [
  // name
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  //Developer info
  {
    type: 'input',
    message: '',
    name: 'name',
  },
  // hometown
  {
    type: 'input',
    message: 'What is your hometown?',
    name: 'hometown',
  },
  // email
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  // github
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'github',
  },
  // linkedIn
  {
    type: 'input',
    message: 'What is your linkedIn username?',
    name: 'linkedin',
  },
  // phone
  {
    type: 'input',
    message: 'What is your phone number?',
    name: 'phone',
  },
];

// FUNCTIONS
const generateHTML = ({ name, hometown, email, github, linkedin, phone }) => {
  const template = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${name}</title>
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
        <h1 class="display-4">${name}</h1>
        <p class="lead">${hometown}</p>
        <hr class="my-4" />
        <ul class="list-group">
          <li class="list-group-item">${email}</li>
          <li class="list-group-item">${github}</li>
          <li class="list-group-item">${linkedin}</li>
          <li class="list-group-item">${phone}</li>
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

