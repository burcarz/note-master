const notes = require('../../db/db.json');
const { findById, noteValidation, createNote } = require('../../lib/notes');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    // gets all notes
    let result = notes
    if (result) {
        res.json(result);
    } else {
        res.send(404)
    }

})

router.get('/notes:id', (req, res) => {
    // get notes by id
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404)
    }
});

router.post('/notes', (req, res) => {
    // create new note
    req.body.id = uuidv4();
    const note = createNote(req.body, notes);
    res.json(notes)
});

router.delete('/notes:id', (req, res) => {
    // deletes a note
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404)
    }
});

module.exports = router;