const express = require('express');
const path = require('path');
const api = require('./routes/api');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route for /api
app.use('/api', api);

app.use(express.static('public'));

// GET route for /notes that returns notes.html
app.get('/notes', (req, res) => 
    // Send notes.html
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET route for * to return index.html
app.get('*', (req, res) => {
    // Send index.html
    res.sendFile(path.join(__dirname, './public/index.html'))
});



// TODO: DELETE route for /api/notes/:id

    // Read notes from db.json

    // Remove note with given id

    // Rewrite notes to db.json


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
