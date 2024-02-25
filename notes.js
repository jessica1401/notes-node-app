import fs from 'fs';

export const addNotes = (title, body) => {
  const notes = loadNotes();
  const isTitleTaken = notes.filter((note) => note.title === title);

  debugger;

  if (isTitleTaken.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);

    console.log('New Note Added');
  } else {
    console.log('Duplicate Note present');
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNoteWithTitle = notes.filter((note) => note.title !== title);
  console.log(notes.length !== filteredNoteWithTitle.length);
  if (notes.length !== filteredNoteWithTitle.length) {
    saveNotes(filteredNoteWithTitle);
    console.log('Note Removed');
  } else {
    console.log(`No note with ${title} present`);
  }
};

export const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(`Note: ${note.title}`);
  } else {
    console.log('No note found');
  }
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync('notes.json');
    const notesJSON = notesBuffer.toString();
    return JSON.parse(notesJSON);
  } catch (e) {
    return [];
  }
};
