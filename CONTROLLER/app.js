//Controller for å navigere mellom sidene

function gotoHome()
{
    model.app.currentpage = 'home';
    updateView();
}

function gotoKoding()
{
    model.app.currentpage = 'MiddagsRullet';
    updateView();
}

function gotoTidsEvent()
{
    model.app.currentpage = 'TimeEvent';
    updateView();
}

function gotoToDo()
{
    model.app.currentpage = 'ToDoList';
    updateView();
}

function gotoBudget()
{
    model.app.currentpage = 'Budget';
    updateView();
}

function gotoJoke()
{
    model.app.currentpage = 'jokeAPI';
    updateView();
}
