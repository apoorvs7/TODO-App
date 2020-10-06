//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/task_list_db');

//aquire the connection(to check if it connected successfully)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console, 'Connection Error:'));

//if connected then print the message
db.once('open', function(){
    console.log('Successfully connected to the database!');
});
