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
        <h1> Usikker på hva du vil spise til middag i dag?</h1>
        <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
        <div id="suggestionDiv">${eatThisFood}</div>
        <div id="addField">
        <h2>Legg til middagsforslag:</h2>
        <div>
            <input id="foodSuggestions" type="text" oninput = "model.foodInput = this.value" />
            <button id="registerButton" onclick="addFood()">Legg til</button>
        </div>
    </div>
</div>

${updateViewNedteller()}
 `
 return html;
 
};

function updateViewNedteller(){
// { document.getElementById("appTidsevent").innerHTML = 

let html = `

<div class="parent">    
    <div class="tidsevent">
        <div>Husk å vanne plantene om:</div>
        <div>${klokkeDiv}</div>
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