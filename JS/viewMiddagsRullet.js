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
        <a href="#MiddagsRulett" onclick="gotoKoding()">Middags Rulett</a>
        <a href="#Tidsevent" onclick="gotoTidsEvent()">Tidsevent</a>
        <a href="#ToDo" onclick="gotoToDo()">ToDo Liste</a>
        <a href="#Budsjett" onclick="gotoBudget()">Budsjett</a>
    </div>

<div class="row">
    <div class="side">
        <h3>Middags Rulett</h3>
        <p>Alle starter et sted og det er en god ting å ha noen små prosjekter ved siden av skolen.
            Her er mitt første lille prosjekt som var gøy å lage. Ikke så vanskelig heller, med litt hjelp såklart.
            </br>
            Alle har den ene vennen som aldri vet hva de vil spise, så her, vær så god, en liten applikasjon som kommer med 
            forslag for deg. Bare trykk på knappen.
        </p>
    </div>

    <div class="mainmiddag">

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

</div>
`
return html;
    
};

function lagDialogBoks(headline, txt, btnText, color) {
    const id = Math.floor(Math.random() * 1000000);
    document.body.innerHTML += `
        
        <div id="${id}" style="
                    background-color: white;
                    color: ${color};
                    border: none;
                    border-radius: 5px;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 50%;
                    position: absolute;
                    left: 30%;
                    top: 50%;
                    z-index: 1;
                ">
            <div style="
                        background-color: ${color};
                        color: white;
                        width: 100%;
                        text-align: center;
                    ">
                <h3>${headline}</h3>
            </div>
            <p style="padding: 10px;">
                ${txt}
            </p>
            <p>
                <button 
                    onclick="closeDialog(${id})"
                    style="width: 300px">
                    ${btnText}
                </button>
        </div>
        </div>
    `;
}