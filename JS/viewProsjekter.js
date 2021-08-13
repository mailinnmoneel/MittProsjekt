//View
//updateViewKoding();

function updateViewKoding()
{
    // document.getElementById("app").innerHTML=
    let html = `
    
    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#Koding" onclick="gotoKoding()">Koding</a>
    </div>

    <div class="parent">
        <h3> Usikker på hva du vil spise til middag i dag?</h3>
        <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
        <div id="suggestionDiv">${eatThisFood}</div>
        <div id="addField">
            <h4>Legg til middagsforslag:</h4>
            <div>
            <input id="foodSuggestions" type="text" oninput = "model.foodInput = this.value" />
            <button id="registerButton" onclick="addFood()">Legg til</button>
        </div>
    </div>
    <div class="tidsevent">
        <div>Husk å vanne plantene om:</div>
        <div id="klokkeDiv"></div>
        <input 
            type="number"
            placeholder="${standardTimer}"
            oninput="model.fredslilje.vanneIntervallInput=this.value"
        />
        <button onclick="changeHours()">Endre antall timer</button> 
        <button onclick="reset()">Reset</button>
    </div>
</div>    
`
return html;
    
};
//Denne må ligge i sin egen view hvis ikke oppdateres hele siden hvert sekund og da får du ikke brukt 
//input feltene. 
function updateViewSekunder(){
    document.getElementById("klokkeDiv").innerHTML = `
    
    ${klokkeDiv}
`
;
}