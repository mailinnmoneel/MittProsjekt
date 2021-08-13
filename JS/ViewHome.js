//View
//updateViewHome();

function updateViewHome()
{
    //document.getElementById("app").innerHTML
    let html = `
    
    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#Koding" onclick="gotoKoding()">Koding</a>
    </div>
    
    <h1>Hjemmesiden</h1>

    `
    return html;
;
}