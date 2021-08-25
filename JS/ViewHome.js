//View
//updateViewHome();

function updateViewHome()
{
    //document.getElementById("app").innerHTML
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
        <img src="bilde_Mailinn.jpg" style="width:400px";>
        <p>Navn: Mailinn Moneel Kiste</p>
        <p>IT-utvikler Student hos Get Academy</p>
        <button>Send meg en email</button>
        <p>Ever tried. Ever failed. No matter. Try again. Fail again. Fail better. 
            -Samuel Beckett</p>
        </div>

        <div class="main">
            <h1>Intro</h1>
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
            
            <h1>Lorem</h1>
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
