
function randomFood() 
{   
        eatThisFood = model.food[Math.floor(Math.random() * model.food.length)];

    updateView()
}

function addFood()
{
    let newFood = model.foodInput;

    if (isEmptyOrSpaces(newFood) == true) 
    { return; }

    model.food.push(newFood);
    
    lagDialogBoks(
        'Ønsket er registrert :) ',
        'Takk for forslaget!',
        'Ok',
        '#4B0082');

   
        
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