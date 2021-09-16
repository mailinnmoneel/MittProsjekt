//View
//updateViewHome();

function updateViewHome()
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
        <img src="bilde_Mailinn.jpg" style="width:400px";>
        <p>Navn: Mailinn Moneel Kiste</p>
        <p>IT-utvikler Student hos Get Academy</p>
        <p>Ever tried. Ever failed. No matter. Try again. Fail again. Fail better. 
            -Samuel Beckett</p>
        </div>

        <div class="main">
            <h2>Intro</h2>
            <p>"Mailinns Prosjekter" er en liten samling med noen av prosjektene jeg jobber med ved siden av studiene på GET Academy.
                Og noe jeg lager med egen læring i fokus. Målet er å øve på HTML, CSS og Javascript i designpatternet Model View Controller.</p>
            <p>Prosjektet er laget under de to første modulene fra GET og er en ren frontend applikasjon uten noe backend.
                I navigasjonsbaren ligger de ulike prosjektene sortert fra eldst til nyest fra venstre til høyre.</p>    
            
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
            
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eveniet commodi hic, ipsa porro quisquam et dolore, 
            quidem labore officia assumenda praesentium neque vero doloremque 
            delectus accusantium exercitationem veritatis nostrum sed?</p>
        </div>
    </div>

    <div class="footer">
        
    </div>

    `
    return html;
;
}
