'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const srcPath = 'testSrc';
describe('generator-my-routes:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ srcPath });
  });

  it('creates files', () => {
    assert.file([`${srcPath}/routes/index.js`]);
  });
});
