// Generated on 2014-08-03 using generator-wix-angular 0.1.67
'use strict';

module.exports = function (grunt) {
  var unitTestFiles = [];
  require('./karma.conf.js')({set: function (karmaConf) {
    unitTestFiles = karmaConf.files.filter(function (value) {
      return value.indexOf('bower_component') !== -1;
    });
  }});
  require('wix-gruntfile')(grunt, {
    staging: 'pizza',
    cdnify: 'vm',
    port: 9000,
    preloadModule: 'minesweeperAppInternal',
    translationsModule: 'minesweeperTranslations',
    unitTestFiles: unitTestFiles,
    protractor: true
  });
};
