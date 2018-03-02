'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay('Welcome to the grand ' + chalk.red('generator-my-routes') + ' generator!')
    );

    this.argument('routeName', { type: String, required: true, default: 'dashboard' });
    this.argument('path', { type: String, required: true });
    this.argument('reactNative', {
      type: String,
      alias: 'rn',
      required: false,
      default: true
    });
  }

  writing() {
    this._createRoute();
  }

  _createRoute() {
    const routeName = this.arguments[0];
    const basePath = this.arguments[1];

    const routePath = `${basePath}/routes/${routeName}`;
    this._createFileStructure(routePath);
  }

  _createFileStructure(routePath) {
    mkdirp.sync(`${routePath}/components/`);
    mkdirp.sync(`${routePath}/containers/`);
    mkdirp.sync(`${routePath}/routes/`);

    this.fs.copy(
      this.templatePath('routes.js'),
      this.destinationPath(`${routePath}/routes/index.js`)
    );
  }
};
