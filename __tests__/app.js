'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const routeName = 'profile';
const basePath = 'src';
describe('generator-my-routes:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments([routeName, basePath]);
  });

  it('creates files', () => {
    assert.file(`${basePath}/routes/${routeName}/routes/index.js`);
  });
});
