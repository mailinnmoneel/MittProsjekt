
//ToDoList Controllere
function updateTask(index) 
{   
    if (emptypersonInput() == true) { model.message.nameField = "Obs! navn.." ; updateView(); return; }
    if (emptytaskInput() == true) { model.message.taskField = "Obs! oppgave.."; updateView(); return; }
    if (emptydateInput() == true) { model.message.dateField = "Obs! dato.."; updateView(); return; }
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
    
    if (emptypersonInput() == true) { model.message.nameField = "Obs! navn.." ; updateView(); return; }
    if (emptytaskInput() == true) { model.message.taskField = "Obs! oppgave.."; updateView(); return; }
    if (emptydateInput() == true) { model.message.dateField = "Obs! dato.."; updateView(); return; }
    
    model.tasks.push({
        person: model.personInput,
        description: model.taskInput,
        date: model.dateInput,

        isDone: false
    });
    model.message.registeredField = "Suksess!";
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

        model.message.nameField = "...";
        model.message.taskField = "...";
        model.message.dateField = " ";

        model.message.registeredField = " ";
    
        updateView();

    }, 3000);

    
}