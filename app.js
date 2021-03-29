const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const { removeNote, addNote } = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'removes a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'Prints a list of notes',
  handler: function() {
    console.log('Printing a list of notes');
  }
});

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function() {
    console.log('Reading a note');
  }
});

yargs.parse();
