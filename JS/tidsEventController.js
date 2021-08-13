//
var standardTimer = model.tidsevent.standardTimer;
var klokkeDiv = model.tidsevent.klokkeDiv;
var nedteller = model.tidsevent.nedteller;
var distance = model.tidsevent.distance;
var days = model.tidsevent.days;
var hours = model.tidsevent.hours;
var minutes = model.tidsevent.minutes;
var seconds = model.tidsevent.seconds;

function Awake()
{
  let x = setInterval(time, 1000);
}

function time() 
{
  let now = new Date().getTime();
        
  distance = window.localStorage.getItem('targetDate') - now; 
    
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateClock();      
}


function updateClock()
{
  klokkeDiv = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s " ;

  if (timeExpired() != null)
    klokkeDiv = timeExpired();

  updateView();
  //resten av siden funker ikke når view oppdateres hvert sekund//
  //Løsning?// 
}

function timeExpired()
{
    if (distance <= 0)
    return "Planten er tørst!";
    else return null;
}

function reset()
{
  let countDownHours = standardTimer;
  let targetDate = Date.now() + countDownHours*1000*60*60; 
  window.localStorage.setItem('targetDate', targetDate) 
//date.now(=millisekunder). Date.now er hva klokken er nå. Countdownhours er X timer som skal telles ned fra.
//local storage lagrer den verdien i browser/husker tiden. TargetDate er navnet på selve local storage. 
} 

//Endrer på antall timer i tidseventen når bruker trykker på knappen. 
function changeHours() 
{
  standardTimer = model.fredslilje.vanneIntervallInput;

  reset();
  Awake();
  updateView();

}