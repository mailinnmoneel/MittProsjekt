
//ToDoList Controllere
function updateTask(index) 
{   
    if (emptypersonInput() == true) { model.message.nameField = "Enter a name!" ; updateView(); return; }
    if (emptytaskInput() == true) { model.message.taskField = "Enter a task!"; updateView(); return; }
    if (emptydateInput() == true) { model.message.dateField = "Enter date!"; updateView(); return; }
    const task = model.tasks[index];
   
    task.description = model.taskInput;
    task.person = model.personInput; 
    task.date = model.dateInput;
    
    task.editMode = false;

    updateView();
}

function editTask(index) 
{
    model.tasks[index].editMode = true;
    updateView();
}

function changeIsDone(checkbox, index) 
{  
    model.tasks[index].isDone = checkbox.checked;

    updateView();
} 

function deleteTask(index) 
{
    model.tasks.splice(index, 1);
    updateView();
}

//AddTaskControllere
function addTask() {
    
    if (emptypersonInput() == true) { model.message.nameField = "Please enter a name to register new task!" ; updateView(); return; }
    if (emptytaskInput() == true) { model.message.taskField = "Please enter a task description!"; updateView(); return; }
    if (emptydateInput() == true) { model.message.dateField = "Please enter a duedate!"; updateView(); return; }
    
    model.tasks.push({
        person: model.personInput,
        description: model.taskInput,
        date: model.dateInput,

        isDone: false
    });
    model.message.registeredField = "New task added!";
    updateView();
    addTaskReset();
}

function emptypersonInput()
{
    return model.personInput === null || model.personInput.match(/^ *$/) !== null;
}

function emptytaskInput()
{
    return model.taskInput === null || model.taskInput.match(/^ *$/) !== null;
}

function emptydateInput()
{
    return model.dateInput === null || model.dateInput.match(/^ *$/) !== null;
}

function addTaskReset() 
{   
    setTimeout(function() {
        model.personInput = null;
        model.taskInput = null;
        model.dateInput = null;

        model.message.nameField = "Enter Name";
        model.message.taskField = "Enter Task";
        model.message.dateField = " ";

        model.message.registeredField = " ";
    
        updateView();

    }, 3000);

    
}