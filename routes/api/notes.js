const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../helpers/fsUtils');

router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
    console.info(`${req.method} request received for notes`);

    const { title, text, user } = req.body;

    if (req.body) {
        const newNotes = { title, text, user };

        readAndAppend(newNotes, './db/db.json');
        res.json(`Notes successfully added!`);
    } else {
        res.error(`Error adding notes`);
    }
});

module.exports = router;