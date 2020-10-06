const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

const Task = require('./models/task');

const app = express();

//setting View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var tasksList = [
    {
        task:'Play Football',
        date:'2/7/20',
        type:'home'
    },
    {
        task:'Do Coding',
        date:'3/7/20',
        type:'college'
    },
    {
        task:'Fly Kite',
        date:'5/7/20',
        type:'home'
    }
]


//To fetch records from db
app.get('/', function(req, res){
    //console.log(req);
    Task.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching tasks');
            return;
        }

        return res.render('home', {
            title:'TODO App',
            tasks_list: tasks
        });

    });
});


//to add a task
app.post('/create-task', function(req, res){

    Task.create({
        task: req.body.task,
        type: req.body.type,
        date: req.body.date
    }, function(err, newTask){
        if(err){
            console.log("Error in creating a new task.");
            return;
        }

        console.log('************', newTask);

        return res.redirect('back');
    });
});

//To delete tasks
app.get('/delete-task', function(req, res){
    
    //getting the list of ids of the items that were checked.
    var checkedList = req.query.idList;

    if(typeof checkedList == 'string'){
        Task.findByIdAndDelete(checkedList, function(err){
            if(err){
                console.log("Error in deleting the task:", err);
                return;
            }
        });
    }

    else{
        for(var i=0; i<checkedList.length; i++){
            Task.findByIdAndDelete(checkedList[i], function(err){
                if(err){
                    console.log("Error in deleting the task:", err);
                    return;
                }
            });
        }
    }

    console.log('***********************',checkedList,'length:', checkedList.length, 'TYPE:', typeof checkedList);

    

    return res.redirect('back');

});


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server up and running on port: ${port}`);
});