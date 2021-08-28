// Work in progress. 
updateViewBudget();

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
            
            `
            
            for(let i = 1; i < model.budgetresult.length; i++) 
                {html+= createExpencesRow(i)
            ;} 
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
        const budgetamount = model.budgetresult[i];
        const exptitle = model.budgetresult[i];
        const expamount = model.budgetresult[i];
        const exptot = model.budgetresult[i];
        return`

        <div> Budsjett ${budgetamount.expenceamount} </div>
        <div> Navn på utgiftpost ${exptitle.expencetitle} </div>
        <div> Beløp for utgift ${expamount.titleamount} </div>
        <div> Utregning etter utgifter ${exptot.total} </div>
      
     
    `
};
// const model = {
//                   budgetinputs: { amount: 0, title: "", expence: 0, sum: 0,},
//                   budgetresult : [
//                       {expenceamount: 0, expencetitle: "", titleamount: 0, total: 0, date: new Date().toLocaleDateString(), }
//                   ],


//controller Budsjett
//Utregning ikke foolproof
function utregning(i) 
{   
    var income = parseInt(model.budgetinputs.amount);
    var expences = parseInt(model.budgetinputs.expence); 
    model.budgetinputs.sum = income - expences;
    
    model.budgetresult.push({
        expenceamount: model.budgetinputs.amount,
        expencetitle: model.budgetinputs.title,
        titleamount: model.budgetinputs.expence,
        total: model.budgetinputs.sum,
    });

    updateView();
}

