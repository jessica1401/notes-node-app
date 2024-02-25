import yargs from 'yargs';
import { addNotes, removeNote, listNotes, readNote } from './notes.js';

yargs.command({
  command: 'add',
  describe: 'To Add new note',
  builder: {
    title: {
      describe: 'Title of Note',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Body for note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'To remove note',
  builder: {
    title: {
      describe: 'Title of note which we want to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'To list note',
  handler: function () {
    listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'To read note',
  builder: {
    title: {
      describe: 'Read Particular note',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
});

yargs.parse();
