// Work in progress. 



function updateViewBudget(i)
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
    </div>

<div class="row">

    <div class="side">
        <h3>Budsjett Applikasjon</h3>
        <p>Starten på en budsjett applikasjon. Spennende ikkesant? Denne er ikke ferdig. Work in progress med andre ord.
        </p>
    </div>

    <div class="mainbudget">
        
        <div class="rowbudget">
                
            <h2>Fyll inn budsjett</h2>
            <input 
                type="number" 
                oninput = "model.budgetinputs.amount = this.value"
            >
            <button onclick = "utregning()" >Legg til</button>
            <h2>Fyll inn utgift</h2>
            <input 
                type="text" 
                oninput = "model.budgetinputs.title = this.value"
            >
            <h2>Fyll inn beløp</h2>
            <input 
                type="number" 
                oninput = "model.budgetinputs.expence = this.value" 
            >
            <button onclick = "utregning()" >Legg til</button>
            </br>
            ${model.budgetresult[0].total}
            
            `
            for(let i = 0; i < model.budgetresult.length; i++) 
                {html+= createExpencesRow();} 
            html+= `    

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
        const expencetitle = model.budgetresult[i];
        const expenceamount = model.budgetresult[i];
        return`
            
        <li>${expencetitle}</li>
     
    `
};

// budgetinputs: { amount: 0, title: "", expence: 0, },
//     budgetresult : [
//         {expenceamount: 0, expencetitle: "", total: 0, date: new Date().toLocaleDateString(), }
//     ],


//controller Budsjett
//Utregning ikke ferdig, eller foolproof

function utregning(i) 
{   
    var income = parseInt(model.budgetinputs.amount);
    var expences = parseInt(model.budgetinputs.expence); 
    var sum = income - expences;

    model.budgetresult[i].total = sum;

    model.budgetresult[i].expencetitle = model.budgetinputs.expence;

    updateView();

    console.log();
}

