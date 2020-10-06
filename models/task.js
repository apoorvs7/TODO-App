const mongoose = require('mongoose');

//Define the structure of our document
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

//"Task" is the name of collection that we are saving in our database.
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;