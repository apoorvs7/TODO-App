//To check whether decription is filled or not.
function validate(){
    var x = document.forms['taskForm']['task'].value;
    if(x == ''){
        alert("Please enter the task decsription!");
        return false;
    }

    var d = document.getElementById('date');
    if(d.value == ''){
        alert('Please enter the due date.');
        return false;
    }
}

//To check atleast one task is selected or not for deleting.
function checkboxValidate(){
    var y = document.getElementById('list-form');
    var z = y.getElementsByTagName('input');
    if(typeof z == 'undefined'){
        alert('No task selected.');
        return false;
    }

    for(let i=0; i<z.length; i++){
        if(z[i].checked){
            return true;
        }
    }

    alert('No task selected.');
    return false;
}


//getting the form of tasks
var form = document.getElementById('list-form');

//getting all the list items of the tasks
var listItems = form.getElementsByTagName('li');

//iterating through all the list items and extracting checkbox of each list item to
//to give them event function.
for(let i=0; i<listItems.length; i++){
    
    var checkBoxes = listItems[i].getElementsByTagName('input');
    checkBoxes[0].onclick = function(){

        //to get the current status of clicked checkbox
        checkBoxes = listItems[i].getElementsByTagName('input');

        var contents = listItems[i].getElementsByTagName('div');
        
        if(checkBoxes[0].checked){
            for(let j=0; j<contents.length; j++){
                contents[j].style.textDecoration = 'line-through';
            }
            console.log(contents);
        }
        else{
            for(let j=0; j<contents.length; j++){
                contents[j].style.textDecoration = 'none';
            }
        }
    }
}