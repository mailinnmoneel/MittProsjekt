//Controller til Middagsrullet
function randomFood() 
{   
        eatThisFood = model.food[Math.floor(Math.random() * model.food.length)];

    updateView()
}

function addFood()
{
    let newFood = model.foodInput;

    if (isEmptyOrSpaces(newFood) == true) { alert("Du må skrive noe i feltet"); return; }


    model.food.push(newFood);
    alert('Ønsket er registrert!');
        
    updateView();
    model.foodInput = null;
}

function isEmptyOrSpaces()
{
    return model.foodInput === null || model.foodInput.match(/^ *$/) !== null;
}
//