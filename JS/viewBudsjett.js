//Starten på budsjett applikasjon. Spennende ikkesant? Denne er ikke ferdig. Work in progress med andre ord. 

function updateViewBudget()
{
    html = `
    <div class="header">
    
    </div>
    
    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#MiddagsRulett" onclick="gotoKoding()">Middags Rulett</a>
        <a href="#Tidsevent" onclick="gotoTidsEvent()">Tidsevent</a>
        <a href="#ToDo" onclick="gotoToDo()">ToDo Liste</a>
        <a href="#Budsjett" onclick="gotoBudget()">Budsjett</a>
    </div>

<div class="row">

    <div class="side">
        <h3>Budsjett Applikasjon</h3>
        <p>Starten på en budsjett applikasjon. Spennende ikkesant? Denne er ikke ferdig. Work in progress med andre ord.
        </p>
    </div>

    <div class="mainbudget">
        
        <div class="rowbudget">
                
            <h2>Fyll inn budsjett</h2>
            <input type="number" this.value="${model.budsjett.inputbeløp}" placeholder="3500,-">
            <button>Legg til</button>
            <h2>Fyll inn utgift</h2>
            <input type="text" this.value="${model.budsjett.utgifter}"placeholder="fuglemat">
            <h2>Fyll inn beløp</h2>
            <input type="number" this.value="${model.budsjett.utgiftbeløp}" placeholder="200,-">
            <button id="addUtgift()">Legg til</button>
            </br>
            ${model.budsjett.utregning}
                
        </div>        
    </div>

</div>


<div class="footer">
</div>
    
    `
    return html;
    
};
