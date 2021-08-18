// View for ToDo List
// var tasksTable = document.getElementById('app');

updateViewTodolist();

function updateViewTodolist(i) 
{       
        html = `
<div class="header">
    <h1>To Do Liste</h1>
</div>

<div class="navbar">
    <a href="#Hjem" onclick="gotoHome()">Hjem</a>
    <a href="#MiddagsRullet" onclick="gotoKoding()">Middags Rullet</a>
    <a href="#TidsEvent" onclick="gotoTidsEvent()">Tids Event</a>
    <a href="#ToDo" onclick="gotoToDo()">ToDo List</a>
</div>

<div class="row">

        <div class="side">
            .....
        </div>

        <div class="main">
            
            <form>
                <div class="container">
                        <h1>Register</h1>
                        </hr>
                        <label for="personName"><b>Who is the lucky person?</b></label>
                        <input type="text" placeholder = "${model.message.nameField}" name="persoNname" id="personName" 
                        oninput = "model.personInput = this.value"/>
                        <label for="Task"><b>What is the task?</b></label>
                        <input type="text" placeholder="${model.message.taskField}" name="task" id="task" 
                        oninput = "model.taskInput = this.value"/> 
                        <label for="dueDate"><b>When does it need to be done?</b></label>
                        <input id="datoInput" type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
                        ${model.message.dateField}
                        <button type="submit" class="registerbtn" onclick="addTask()">Register new task!</button>
                </div>
            </form> 

            <div id="registered"><b>${model.message.registeredField}</b></div>


                <table>
                    <tr>
                        <th>Name</th>    
                        <th>Task</th>
                        <th></th>
                        <th></th>
                        <th>Duedate</th>
                        <th>Date done</th>
                    </tr>       
                 </table>

        </div>        
</div>

`
;for (let i = 0; i < model.tasks.length; i++) {html += createHtmlRow(i);}

return html;
   
};
        
function createHtmlRow(i) 
{
    const person = model.tasks[i]; 
    const task = model.tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    const dateOutput = task.isDone ? new Date().toLocaleDateString() : '';
        if (!task.editMode)
            return `
<div class="row">        
    <div class="side">
        
    </div>

    <div class="main">
        <table>    
            <tr>
                <td>${task.person}</td>
                <td>${task.description}</td>
                <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                
                <td>
                    <button id="editId" onclick="editTask(${i})">Edit</button> 
                    <button id="deleteId" onclick="deleteTask(${i})">Delete</button>
                </td>
                <td><div id="dueDate${i}"></div>${task.date}</td>
                <td><div id=datoOutput"</div>${dateOutput}</td>
            </tr>
        </table>
    </div>
</div>        
     `;
            return `
        <table>    
            <tr>
                <td><input id="editPerson${i}" type="text" 
                    placeholder = "${model.message.nameField}"
                    oninput = "model.personInput = this.value"/>
                </td>
                <td><input id="editDescription${i}" type="text"
                    placeholder="${model.message.taskField}" 
                    oninput = "model.taskInput = this.value"/>
                </td>
                <td></td>
                <td>
                <button id="saveId" onclick="updateTask(${i})">Save</button>               
                </td>
                <td><tt><input id="editDate${i}" 
                    type="date" onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
                    </tt>${model.message.dateField}</td>
                <td><tt></tt>${dateOutput}</td>
            </tr>  
        </table>

    `;
}