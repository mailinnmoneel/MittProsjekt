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
        
        <div class="rowbudget">

            <div class="column">
                <div class="card">
                    <h1>Fyll inn budsjett</h1>
                    <input type="number" this.value="${model.budsjett.inputbeløp}" placeholder="3500,-">
                    <button>Gjør Utregning</button>
                </div>
            </div>        

            <div class="column">
                <div class="card">
                    <h1>Fyll inn utgift</h1>
                    <input type="text" this.value="${model.budsjett.utgifter}">
                    <h1>Fyll inn beløp</h1>
                    <input type="number" this.value="${model.budsjett.utgiftbeløp}">
                    <button id="addUtgift()">Legg til utgift</button>
                </div>    
            </div>

            <div class="column">
                <div class="card">
                    <div> fuglemat </div>
                    <div> 175,- </div>
                </div>    
            </div>

            <div class="column">
                <div class="card">
                    <h1>Balanse</h1>
                    <div>${model.budsjett.utregning}</div>
                </div>        
            </div>

        </div>        
    </div>

</div>


<div class="footer">
</div>
    
    `
    return html;
    
};
