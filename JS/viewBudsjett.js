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
    </div>

<div class="row">

    <div class="side">
        <h3>Budsjett Applikasjon</h3>
        <p>Starten på en budsjett applikasjon. Denne er ikke ferdig. Work in progress.
        </p>
    </div>

    <div class="mainbudget">        
        <div class="resultDiv">
            <h2> Budsjett Kr: ${model.budgetinputs.amount},-</h2>
            <h2> Utregning etter utgifter: ${model.budgetinputs.sum},-</h2>
        </div>
        <div class="customGrid">
            <form class="chooseMonth">                
                <label>Fyll inn budsjett</label>
                <input 
                    class="budgetInput"
                    type="number" 
                    oninput = "model.budgetinputs.amount=this.value"
                >
            </form>

            <div class="rowbudget">
                <form class="inputsDiv">
                   
                    <label>Fyll inn utgift</label>
                    <input 
                        class="budgetInput"
                        type="text" 
                        oninput = "model.budgetinputs.title = this.value"
                    >
                    <label>Fyll inn beløp</label>
                    <input 
                        class="budgetInput"
                        type="number" 
                        oninput = "model.budgetinputs.expence = this.value" 
                    >
                    <button
                        class="budgetButton"
                        onclick = "calculate()">Regn ut</button>
                </form>
            </div>
            
            <div class="utgifterBlokk">
                <h2>Utgifter</h2>
                <div class="grid-container">    
                    <div class="grid-item">Tittel</div>
                    <div class="grid-item">Beløp</div>
                
                    `
                    
                    for(let i = 0; i < model.budgetresult.length; i++) 
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

//View utgifter rad
function createExpencesRow(i)
    {
  
        const exptitle = model.budgetresult[i];
        const expamount = model.budgetresult[i];
            return`

        <div class="grid-item">${exptitle.expencetitle}</div>
        <div class="grid-item">${expamount.titleamount},-</div>     
        `
    };


//controller Budsjett
function calculate() 
{   
    var income = parseInt(model.budgetinputs.amount); 
    var expences = parseInt(model.budgetinputs.expence); 
    model.budgetinputs.sum = income - expences; 

    
    model.budgetresult.push({    
        expencetitle: model.budgetinputs.title,  
        titleamount: model.budgetinputs.expence, 
     
    });

    updateView();
    clearInputs();
}


function clearInputs()
{
    model.budgetinputs.amount = income;
    model.budgetinputs.title = null;
    model.budgetinputs.expence = null;
    model.budgetinputs.sum = 0;

}

// function emptyInputBudget()
// {
//     return model.budgetinputs.amount === null || model.budgetinputs.amount.match(/^ *$/) !==null;
// }