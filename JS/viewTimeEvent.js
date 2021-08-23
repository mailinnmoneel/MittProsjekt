//Tide
function updateViewTimeEvent()
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
        <h3>Tids Event</h3>
        <p>Fordi hvem glemmer vel ikke å vanne plantene sine?</p>
    </div>

    <div class="maintime">
        <div>Husk å vanne plantene om:</div>
        <div id="klokkeDiv"></div>             
        <div id="edit">
            <input id="planteinput" type="number"
                placeholder="${standardTimer}"
                oninput="model.fredslilje.vanneIntervallInput=this.value"
            />
            <button id="planteknapp" onclick="changeHours()">Endre antall timer</button> 
            <button id="planteknapp" onclick="reset()">Reset</button>
        </div>
    </div>   

</div>

<div class="footer">

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