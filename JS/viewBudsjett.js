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
        <p>Starten på en budsjett applikasjon. Denne er ikke ferdig. Work in progress.
        </p>
    </div>

    <div class="mainbudget">
        
        <div class="rowbudget">
            <div class="resultDiv">
                <h2> Budsjett Kr: ${model.budgetinputs.amount},-</h2>
                <h2> Utregning etter utgifter: ${model.budgetinputs.sum},-</h2>
            </div>
            <div class="inputsDiv">
                <p>Fyll inn budsjett</p>
                <input 
                    class="budgetInput"
                    type="number" 
                    oninput = "model.budgetinputs.amount = this.value"
                >
                <p>Fyll inn utgift</p>
                <input 
                    class="budgetInput"
                    type="text" 
                    oninput = "model.budgetinputs.title = this.value"
                >
                <p>Fyll inn beløp</p>
                <input 
                    class="budgetInput"
                    type="number" 
                    oninput = "model.budgetinputs.expence = this.value" 
                >
                <button
                    class="budgetButton"
                    onclick = "utregning()">Legg til</button>
            </div>
        </div>
        <ul>
            <h2>Utgifter</h2>
        </ul>
            `
            
            for(let i = 1; i < model.budgetresult.length; i++) 
                {html+= createExpencesRow(i)
            ;} 
            html+= `    

               
    </div>

</div>

<div class="footer">
</div>
    
    ` 
    return html;
};


function createExpencesRow(i)
    {
    // const exptot = model.budgetresult[i];
    // const budgetamount = model.budgetresult[i];
    const exptitle = model.budgetresult[i];
    const expamount = model.budgetresult[i];
        return`
    <ul>
        <li>
            Hva: ${exptitle.expencetitle}</li>
            Beløp Kr: ${expamount.titleamount},-
        </li>
    </ul>
   
     
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
    //Trenger funksjon for income + income
    // Funksjon for å bare legge til budsjett
    // Funksjon for å bare legge til utgift

    // if(emptyInputBudget() === true) { return; }

    model.budgetresult.push({
        expencetitle: model.budgetinputs.title,
        titleamount: model.budgetinputs.expence,
        // total: model.budgetinputs.sum,
        // expenceamount: model.budgetinputs.amount,
    });

    model.budgetresult[0].expenceamount = model.budgetinputs.amount;
    model.budgetresult[0].total = model.budgetinputs.sum;


    updateView();
    clearInputs();
}

function clearInputs()
{
    model.budgetinputs.amount = null;
    model.budgetinputs.title = null;
    model.budgetinputs.expence = null;
    model.budgetinputs.sum = null;

}

function emptyInputBudget()
{
    return model.budgetinputs.amount === null || model.budgetinputs.amount.match(/^ *$/) !==null;
}