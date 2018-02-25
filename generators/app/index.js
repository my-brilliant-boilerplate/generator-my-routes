'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay('Welcome to the grand ' + chalk.red('generator-my-routes') + ' generator!')
    );

    const prompts = [
      {
        type: String,
        name: 'srcPath',
        message: 'Name of application directory',
        default: 'src',
        store: true
      },
      {
        type: Boolean,
        name: 'reactNative',
        message: 'For react native',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this._createMainRoutesFile();
  }

  _createMainRoutesFile() {
    this.fs.copy(
      this.templatePath('main-routes.js'),
      this.destinationPath(`${this.props.srcPath}/routes/index.js`)
    );
  }
};
