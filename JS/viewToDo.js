// View for ToDo List

updateViewTodolist();

function updateViewTodolist(i) 
{       
        html = `
<div class="headerTodo">
    <h1>To Do Liste</h1>
</div>

<div class="navbar">
    <a href="#Hjem" onclick="gotoHome()">Hjem</a>
    <a href="#MiddagsRullet" onclick="gotoKoding()">Middags Rullet</a>
    <a href="#TidsEvent" onclick="gotoTidsEvent()">Tids Event</a>
    <a href="#ToDo" onclick="gotoToDo()">ToDo List</a>
</div>

<div class="row">

        <div class="sideTodo">
            .....
        </div>

        <div class="mainTodo">
            
            <form>
                <h1>Legg til flere oppgaver</h1>
                </hr>
                <label for="personName"><b>Navn</b></label>
                <input type="text" placeholder = "${model.message.nameField}" 
                    name="persoNname" id="personName" 
                    oninput = "model.personInput = this.value"/>
                <label for="Task">Oppgave</b></label>
                <input type="text" placeholder="${model.message.taskField}" 
                    name="task" id="task" 
                    oninput = "model.taskInput = this.value"/> 
                <label for="dueDate"><b>Frist</b></label>
                <input id="datoInput" type="date" 
                    onchange = "model.dateInput = this.valueAsDate.toLocaleDateString().substr(0,10)">
                ${model.message.dateField}
                <button type="submit" class="registerbtn" 
                    onclick="addTask()">Legg til</button>
            </form> 

            <div id="registered"><b>${model.message.registeredField}</b></div>


                <table id="tableDiv">
                    <tr>
                    <th>Name</th>    
                    <th>Task</th>
                    <th></th>
                    <th></th>
                    <th>Duedate</th>
                    <th>Date done</th>
                    </tr> 
                    </table>
                    `
                    ;
                    for (let i = 0; i < model.tasks.length; i++)
                        {html += createTableRow(i)
                    ;} 
                    html += `
        </div>        
</div>

<div class="footer">
    <h2>Footer</h2>
</div>

`
return html;

};
        


function createTableRow(i) 
{
    const person = model.tasks[i]; 
    const task = model.tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    const dateOutput = task.isDone ? new Date().toLocaleDateString() : '';
        if (!task.editMode)
            return `
            
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