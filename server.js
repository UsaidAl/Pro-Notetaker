const express = require('express');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,"/public/index.html" ));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
  });


  app.listen(PORT, () => {
    console.log(`The server is now listening to http://localhost:${PORT}`);
  });