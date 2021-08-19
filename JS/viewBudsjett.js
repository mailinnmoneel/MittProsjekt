//Starten på budsjett applikasjon. Spennende ikkesant? Denne er ikke ferdig. Work in progress med andre ord. 

function updateViewBudget()
{
    html = `
    <div class="header">
    
    </div>
    
    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#MiddagsRullet" onclick="gotoKoding()">Middags Rullet</a>
        <a href="#TidsEvent" onclick="gotoTidsEvent()">Tids Event</a>
        <a href="#ToDo" onclick="gotoToDo()">ToDo Liste</a>
        <a href="#Budsjett" onclick="gotoBudget()">Budsjett</a>
    </div>

<div class="row">

    <div class="side">
        <h3>Budsjett Applikasjon</h3>
        <p>Starten på en budsjett applikasjon. Spennende ikkesant? Denne er ikke ferdig. Work in progress med andre ord.
        </p>
    </div>

    <div class="main">
        <h3>Work in progress</h3>

    </div>

</div>


<div class="footer">
    <h2>Footer</h2>
</div>
    
    `
    return html;
    
};
