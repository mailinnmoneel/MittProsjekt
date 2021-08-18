//View
//updateViewKoding();

function updateViewMiddagsRullet()
{
    // document.getElementById("app").innerHTML=
    let html = `
    
    <div class="header">
        <h1>Middags Rullet</h1>
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
        <h3> Usikker på hva du vil spise til middag i dag?</h3>
        <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
        <div id="suggestionDiv">${eatThisFood}</div>
        <div id="addField">
            <h4>Legg til middagsforslag:</h4>
        </div>
        <input id="foodSuggestions" type="text" oninput = "model.foodInput = this.value" />
        <button id="registerButton" onclick="addFood()">Legg til</button>
    </div>        
</div>

<div class="footer">
    <h2>Footer</h2>
</div>
`
return html;
    
};
//Controller til Middagsrullet
function randomFood() 
{   
        eatThisFood = model.food[Math.floor(Math.random() * model.food.length)];

    updateView()
}

function addFood()
{
    let newFood = model.foodInput;

    if (isEmptyOrSpaces(newFood) == true) { alert("Du må skrive noe i feltet"); return; }


    model.food.push(newFood);
    alert('Ønsket er registrert!');
        
    updateView();
    model.foodInput = null;
}

function isEmptyOrSpaces()
{
    return model.foodInput === null || model.foodInput.match(/^ *$/) !== null;
}
//
