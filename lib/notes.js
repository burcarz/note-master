const fs = require('fs');
const path = require('path');

function findById(id, notesArr) {
    const result = notesArr.filter(note => note.id === id)[0];
    return result;
}

function createNote(body, notesArr) {
    // creates a new note
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    return note;
}

function noteValidation(note) {
    // validates that notes have bodys and titles
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false
    }
}

module.exports = {
    findById,
    createNote,
    noteValidation
}