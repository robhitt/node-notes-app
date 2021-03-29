const fs = require('fs');
const chalk = require('chalk');

const getNotes = function (note) {
  return `Your notes are ${note}`;
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log('Note title taken');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter(note => note.title !== title);

  if (notes.length > updatedNotes.length) {
    console.log(chalk.bgGreen('Note Removed!'));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
}

const saveNotes = function (notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = function () {
  try {
    const notesBuffer = fs.readFileSync('./notes.json');
    const notesJSON = notesBuffer.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
}

module.exports = {
  removeNote,
  addNote
};