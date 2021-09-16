//Tide
function updateViewTimeEvent()
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
        <a href="#Vitser" onclick="gotoJoke()">Vitser</a>
    </div>

<div class="row">

    <div class="side">
        <h3>Tids Event</h3>
        <p>Fordi hvem glemmer vel ikke å vanne plantene sine?</p>
        <p> Denne startet som min første obligatoriske oppgave etter bare 4 uker med koding på Get. Og er den oppgaven som sålangt har bydd på mest utfordring og til tider litt frustrasjon. 
            Jeg lærte mye om Javascript og designmønsteret MVC, men også verdien av å ikke gi opp og ikke være redd for å feile og prøve igjen.  
            </p>
        <p> Det er verdt å nevne at denne koden ikke fungerer helt optimalt og burde skrives i et annet designmønster enn MVC, da klokka oppdaterer 
            hele siden hvert sekund. Jeh har valgt å ikke bruke tid på det nå da jeg vil forsette å lære det som er pensum nå.
            Men kanskje den er fin å bruke senere når jeg skal lære C#?</p>    
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


function updateViewSekunder(){
    document.getElementById("klokkeDiv").innerHTML = `
    
    ${klokkeDiv}
`
;
}