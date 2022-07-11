const router = require('express').Router();
const notesRouter = require('./notesRouter');

router.use('/notes', notesRouter);

module.exports = router;