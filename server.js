
// need a route for add movie
// need a route for all movie reviews
// need a route for delete movie
// need a route for edit review (bonus)
const express = require("express");
const app = express();
const uuid = require("uuid");
const mysql = require('mysql2')
const PORT = process.env.PORT || 3001

const db = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'movie_db'
    })

    db.query('SELECT * FROM movies', function (err, res) {
        console.log(res);
      });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// need a route for all movies
app.get("/api/movies", (req, res) => {

});

app.post("/api/movies/", (req, res) => {});

app.get("/", (req, res) => {});

app.get("/", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });