//View
//updateViewHome();

function updateViewHome()
{
    //document.getElementById("app").innerHTML
    let html = `
    
    <div class="header">
        <h1>Mailinn Moneel Kiste</h1>
        <p>Mistakes are the portals of discovery.-James Joyce.</p>
    </div>

    <div class="navbar">
        <a href="#Hjem" onclick="gotoHome()">Hjem</a>
        <a href="#MiddagsRullet" onclick="gotoKoding()">Middags Rullet</a>
        <a href="#TidsEvent" onclick="gotoTidsEvent()">Tids Event</a>
        <a href="#ToDo" onclick="gotoToDo()">ToDo Liste</a>
    </div>

    <div class="row">
        <div class="side">
        <img src="bilde_Mailinn.jpg" style="width:400px";>
            <button>Send meg en email</button>
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
        <h2>Footer</h2>
    </div>

    `
    return html;
;
}
