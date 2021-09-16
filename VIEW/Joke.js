
//Model API
const joke = document.querySelector('.joke');
const jokeParagraph = document.querySelector('.joke p');
let output = null;

//View

function updateViewJoke() 
{
    let html = `
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
            <p>Et bittelite prosjekt jeg ville lage da jeg var nysgjerrig på API.
                Denne var ikke så vanskelig, bare en morsom liten øvelse. Et kort prosjekt som kan gjøres på noen få timer.</p>
        </div>

        <div class="main">
            <div class="jokemain">
                <div class="container">
                    <div class="joke">
                        <h2>Få en random dårlig vits!</h2>
                        <div class="txt"><p></p></div>
                    </div>
                    <button id="jokeBtn" onclick="getRandom()">Trykk på meg!</button>
                </div>
                <div id="joke"></div>
            </div>    
        </div>
    </div>

    <div class="footer">
        
    </div>
   
    `
    return html;
}

//Controller
async function getRandom() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const resJson = await jokeRes.json();
    document.getElementById("joke").innerHTML = resJson.joke;
    updateViewJoke();
  }