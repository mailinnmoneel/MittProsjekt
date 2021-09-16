// Work in progress. 

updateViewBudget();

function updateViewBudget(i)
{   
    html = `
    <div class="header"></div>
    
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
        <h3>Budsjett Applikasjon</h3>
        <p>En liten og enkel budsjett applikasjon laget bare for gøy utenfor skoletiden og som et lite koselig 
            sideprosjekt. Fokuset er fortsatt på Javascript og designmønsteret MVC. 
        </p>
    </div>

    <div class="mainbudget">        
        <div class="resultDiv">
            <h2 id="hBudsj"> Budsjett: ${model.budget.budgetfixed},-</h2>
            <h2 id="hBudsj"> Utregning etter utgifter: ${model.budgetinputs.sum},-</h2>
            <p style="color:white;"> Budsjett før siste regning ${model.budgetinputs.amount},- </p>
        </div>
        <div class="customGrid">
            <form class="chooseMonth">                
                <label>Fyll inn budsjett</label>
                <input 
                    class="budgetInput"
                    type="number" 
                    placeholder = "Beløp"
                    oninput = "model.budgetinputs.input = this.value"
                >
                <button
                class="budgetButton"
                onclick = "upDateYourBudget()">Registrer nytt beløp</button>
            </form>

            <div class="rowbudget">
                <form class="inputsDiv">
                   
                    <label>Fyll inn utgift</label>
                    <input 
                        class="budgetInput"
                        type="text" 
                        placeholder="Tittel"
                        oninput = "model.budgetinputs.title = this.value"
                    >
                    <label>Fyll inn beløp</label>
                    <input 
                        class="budgetInput"
                        type="number" 
                        placeholder="Beløp"
                        oninput = "model.budgetinputs.expence = this.value" 
                    >
                    <button
                        class="budgetButton"
                        onclick = "calculate()">Legg til utgift</button>
                </form>
            </div>
            
            <div class="utgifterBlokk">
                <div id="hBudsj">
                    <h2>Utgifter</h2>
                    <h2 onclick="clearUtgifter()">Tøm</h2>
                </div>
                <div class="grid-container">   
                    <div class="grid-item">Tittel</div>
                    <div class="grid-item">Beløp</div>
                
                    `
                    
                    for(let i = 1; i < model.budgetresult.length; i++) 
                        {html+= createExpencesRow(i)
                    ;} 
                    html+= `    
                    
                </div>
              
            </div>
        </div>
    </div>
</div>
<div class="footer">
</div>
    
    ` 
    return html;
};

function createExpencesRow(i)
    {
  
        const exptitle = model.budgetresult[i];
        const expamount = model.budgetresult[i];
            return`

        <div class="grid-item">
            ${exptitle.expencetitle}</div>
        <div class="grid-item">
            -${expamount.titleamount},-</div>     
        `
    };

//controllers

function upDateYourBudget()
{    
    if (model.budgetinputs.input == 0 )
        {console.log("Fyll inn beløp"); return;}
     
    model.budget.budgetfixed = model.budgetinputs.input;
    model.budgetinputs.amount = model.budgetinputs.input;
    model.budgetinputs.sum = model.budgetinputs.input;
    updateView();
}


function clearUtgifter() {

    model.budgetresult.splice(1,2);
    updateView();
}

function calculate() 
{   
    if(model.budgetinputs.expence === 0) {
        console.log("Beløp"); return; }
    if(model.budgetinputs.title === null) {
        console.log("Tittel"); return; }

    const budsjett = parseInt(model.budgetinputs.amount); 
    let utgifter = parseInt(model.budgetinputs.expence); 
    let calculation = budsjett - utgifter;

    model.budgetinputs.sum = parseInt(calculation);

    model.budgetresult.push({    
        expencetitle: model.budgetinputs.title,  
        titleamount: model.budgetinputs.expence, 
     
    });
    updateView();
    clearInputs();
}

function clearInputs()
{
    model.budgetinputs.amount = model.budgetinputs.sum;
    model.budgetinputs.title = null;
    model.budgetinputs.expence = 0;
    model.budgetinputs.sum = 0;
}



