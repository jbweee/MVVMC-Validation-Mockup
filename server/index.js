const express = require('express');
const parser = require('body-parser');
const path = require('path');
const PORT = 3000;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// app.use('/api', router);

//just need to set static to the folder
app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('Mockup listening on PORT', PORT);
})