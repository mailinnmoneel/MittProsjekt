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
                <label>Velg måned</label>
                <input  
                    class="budgetInput"
                    title="Velg måned, Feks. September"
                >                    
                <label>Fyll inn budsjett</label>
                <input 
                    class="budgetInput"
                    type="number" 
                    oninput = "model.budgetinputs.amount=this.value"
                >
                <button onclick="addMonthBudget()" class="budgetButton">Legg til</button>
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
                        onclick = "calculateExpences()">Legg til</button>
                </form>
            </div>
            
            <div class="utgifterBlokk">
                <h2>Utgifter</h2>
                <div class="grid-container">    
                    <div class="grid-item">Hva</div>
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

//View utgifter rad
function createExpencesRow(i)
    {
    // const exptot = model.budgetresult[i];
    // const budgetamount = model.budgetresult[i];
    const exptitle = model.budgetresult[i];
    const expamount = model.budgetresult[i];
        return`

    <div class="grid-item">${exptitle.expencetitle}</div>
    <div class="grid-item">${expamount.titleamount},-</div>     
    `
};

// const model = {
//                   budgetinputs: { amount: 0, title: "", expence: 0, sum: 0,},
//                   budgetresult : [
//                       {expenceamount: 0, expencetitle: "", titleamount: 0, total: 0, date: new Date().toLocaleDateString(), }
//                   ],


//controller Budsjett
function addMonthBudget() 
{   
    var income = parseInt(model.budgetinputs.amount); //Budsjettet for måneded
    var expences = parseInt(model.budgetinputs.expence); //Beløp på utgift
    model.budgetinputs.sum = income - expences; // Budsjett - utgift

    if(emptyInputBudget() === true) { return; } //Usikker på om denne slår til

    model.budgetresult.push({    //Pusher inputs inn i array
        expencetitle: model.budgetinputs.title,  //tittel på utgift
        titleamount: model.budgetinputs.expence, // beløp på utgift
        // total: model.budgetinputs.sum,  //husker ikke hva jeg tenkte her
        // expenceamount: model.budgetinputs.amount, //eller her
    });

    model.budgetresult[0].expenceamount = model.budgetinputs.amount;
    model.budgetresult[0].total = model.budgetinputs.sum;


    updateView();
    clearInputs();
}

//Utregning
function calculateExpences(i) 
{    
    // Funksjon for å bare legge til utgift

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