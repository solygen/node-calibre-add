#!/usr/bin/env node
(function () {

  'use strict';

  function add(id, callback) {
    var exec = require('child_process').exec;
    exec('calibredb add -i ' + id + ' -e', function (error, stdout, stderr) {
      stdout.split('\n').forEach(function (line) {
        console.log('calibre: ' + line);
      });
    });
  }

  (function waitForInput() {
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', function (inp) {
      var text = inp.replace('\n', '').trim();
      if (text === 'quit' || text === '') {
        process.exit();
      } else {
        add(text);
      }
    });
  })();

}());
