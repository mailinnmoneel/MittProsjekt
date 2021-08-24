
function randomFood() 
{   
        eatThisFood = model.food[Math.floor(Math.random() * model.food.length)];

    updateView()
}

function addFood()
{
    let newFood = model.foodInput;

    if (isEmptyOrSpaces(newFood) == true) 
    { 
        alert("Du må skrive noe i feltet"
    ); 
    return; }

    model.food.push(newFood);
    
    lagDialogBoks(
        'Ønsket er registrert',
        'Takk for forslaget.',
        'Ok',
        'green');

   
        
    updateView();
    model.foodInput = null;
}

function isEmptyOrSpaces()
{
    return model.foodInput === null || model.foodInput.match(/^ *$/) !== null;
}

function closeDialog(idToClose) 
{
    document.getElementById(idToClose).outerHTML = '';
}