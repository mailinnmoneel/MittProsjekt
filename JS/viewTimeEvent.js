//Tide
function updateViewTimeEvent()
{
    // document.getElementById("app").innerHTML=
    let html = `
    
    <div class="header">
        <h1>Tids Event</h1>
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
</div>

<div class="footer">
    <h2>Footer</h2>
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