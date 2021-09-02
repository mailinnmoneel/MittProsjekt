//Model

const model = {
    tasks : [
        { person: 'Alexa', description: 'Handle planter', date: new Date().toLocaleDateString(), isDone: true },
        { person: 'Peter', description:  'Vaske bilen', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Alexa', description: 'Bake kake', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Alexa', description: 'Frisøren', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Peter', description: 'Organisere klesskapet', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Peter', description: 'Skifte olje', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Peter', description: 'Lufte hunden', date: new Date().toLocaleDateString(), isDone: false },
    ],

    dateInput: null,
    dateOutput: null,
    personInput: null,
    taskInput: null,
    message: {nameField: '...', taskField: '...', dateField: ' ', registeredField: ''},

    tidsevent:{
         standardTimer: 24,
         klokkeDiv:"",
         nedteller: "",
         distance:0,
         days: 0,
         hours: 0,
         minutes: 0,
         seconds: 0,
    },

    app: { currentpage: 'home',

    },

    fredslilje: { kallenavn: "Fredslilje",
    vanneIntervallInput: "24", 
    },

    budgetinputs: { amount: 0, title: "", expence: 0, sum: 0, },
    budgetresult : [
        {expenceamount: 0, expencetitle: "", titleamount: 0, total: 0, date: new Date().toLocaleDateString(), }
    ],

    food : ['Kremet pasta med kylling',
            'Spaghetti med tomatsaus og kjøttboller',
            'Salat med avokado og kylling',
            'Couscoussalat med kylling og appelsin',
            'Reke og mangosalat',
            'Vegetarburger med grillet mais, sopp og tortillachips',
            'Pannestekt Makrell',
            'Vegetar Pizza med spinat, tomat og basilikum',
            'Vegetar Pizza',
            'Protein pannekaker med jordbær',
            'Haloumi Burger',
            'Spaghetti og Kjøttboller',
            'Wok med nudler og grønnsaker',
            'Vegetartaco med søtpotet',
            'Protein Pannekaker med jordbær',
            'GrønnsaksWok', 
            'Haloumi Burger',
            'Biff og Grønnsaker',
            'Kyllingsalat', 
            'Sprøstekt makrell og nypotetsalat',
            'Tapas med dadler og asparges surret i serranoskinke',
            'Biff med stekt tomat, småpoteter og soppsaus',
    ],

    foodInput: null,
}

let eatThisFood = '.......';



