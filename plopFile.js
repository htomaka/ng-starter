var fs = require('fs');

module.exports = function(plop) {
  plop.addHelper('upCaseName', function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });
  plop.addPrompt('directory', require('inquirer-directory'));

  // We declare a new generator called "module"
  plop.setGenerator('component', {

    // Succintly describes what generator does.
    description: 'Create a new component',

    // Get inputs from the user.
    // That's Inquirer.js doing the job behind the hood.
    prompts: [
      {
        type: 'directory',
        name: 'from',
        message: 'Where you like to put this component?',
        basePath: './app/components/'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],

    // List of actions to take.
    // Here we "add" new files from our templates.
    actions: [
      function makeDir(answers) {
        console.log(answers);
        var dir = './app/components/' + answers.from + '/' + answers.name;
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        return answers;
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.js',
        templateFile: 'generator/temp.js'
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.spec.js',
        templateFile: 'generator/temp.spec.js'
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.scss',
        templateFile: 'generator/temp.scss'
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.tpl.jade',
        templateFile: 'generator/temp.tpl.jade'
      },
      {
        type: 'add',
        path: 'app/components/{{name}}/{{name}}.controller.js',
        templateFile: 'generator/temp.controller.js'
      }
    ]

  });
};
