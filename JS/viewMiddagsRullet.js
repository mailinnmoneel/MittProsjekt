//View
//updateViewKoding();

function updateViewMiddagsRullet()
{
    // document.getElementById("app").innerHTML=
    let html = `
    
    <div class="header">
    </div>

    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#MiddagsRullet" onclick="gotoKoding()">Middags Rullet</a>
        <a href="#TidsEvent" onclick="gotoTidsEvent()">Tids Event</a>
        <a href="#ToDo" onclick="gotoToDo()">ToDo Liste</a>
    </div>

<div class="row">
    <div class="side">
        <h3>Middags Rullet</h3>
        <p>Alle starter et sted og det er en god ting å ha noen små prosjekter ved siden av skolen.
            Her er mitt første lille prosjekt som var gøy å lage. Ikke så vanskelig heller, med litt hjelp såklart.
            </br>
            Alle har den ene vennen som aldri vet hva de vil spise, så her, vær så god, en liten applikasjon som kommer med 
            forslag for deg. Bare trykk på knappen.
        </p>
    </div>

    <div class="main">

        <div class="parent">
            <h3> Usikker på hva du vil spise til middag i dag?</h3>
            <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
            </br>
            <div id="suggestionDiv">${eatThisFood}</div>
            <div id="addField">
                <h4>Legg til middagsforslag:</h4>
            </div>
            <div>
                <input id="foodSuggestions" type="text" oninput = "model.foodInput = this.value" />
                <button id="registerButton" onclick="addFood()">Legg til</button>
            </div>    
        </div>

    </div>        
</div>

<div class="footer">
    <h2>Footer</h2>
</div>
`
return html;
    
};

