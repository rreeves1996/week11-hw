const express = require('express');
const path = require('path');
const uuid = require('./helpers/uuid');
const fs = require('fs');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// TODO: Create GET route for /notes that returns notes.html
app.get('/notes', (req, res) => 
    // Send notes.html
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// TODO: Create GET route for * to return index.html
app.get('*', (req, res) => {
    // Send index.html
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// TODO: GET route for /api/notes which reads db.json and returns saved notes as JSON
app.get('/api/notes', (req, res) => {
    
});

// TODO: POST route for /api/notes

    // Receive new note to save on request body

    // Add it to db.json

    // Return new note to client

    // Give each note unique id when saved


// TODO: DELETE route for /api/notes/:id

    // Read notes from db.json

    // Remove note with given id

    // Rewrite notes to db.json


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
