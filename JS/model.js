//Model

const model = {
    tasks : [
        { person: 'Alexa', description: 'Order plants', date: new Date().toLocaleDateString(), isDone: true },
        { person: 'Emma', description:  'Fix car', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Trudy', description: 'Bake Cake', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Even', description: 'Get haircut', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Ben', description: 'Organice closet', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Peter', description: 'Buy new brush', date: new Date().toLocaleDateString(), isDone: false },
        { person: 'Elena', description: 'Clean Stalls', date: new Date().toLocaleDateString(), isDone: false },
    ],
    dateInput: null,
    dateOutput: null,
    app: { currentpage: 'todolist',
    },
    personInput: null,
    taskInput: null,
    message: {nameField: 'Enter Name', taskField: 'Enter Task', dateField: ' ', registeredField: ''},

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
    app: { currentpage: 'ToDoList',

    },
    fredslilje: { kallenavn: "Fredslilje",
    vanneIntervallInput: "24", 
    },
    food : ['Kremet pasta med kylling',
            'Spaghetti med tomatsaus og kjøttbolle',
            'Kremet pasta med laks',
            'Salat med avokado og kylling',
            'Couscoussalat med kylling og appelsin',
            'Reke og mangosalat',
            'Vegetarburger med grillet mais, sopp og tortillachips',
            'Pannestekt Makrell',
            'Vegetar Pizza med spinat, tomat og basilikum',
            'Vegetar Pizza',
            'Protein pannekaker med jordbær',
            'Haloumi Burger',
            'Grandis',
            'Spaghetti og Kjøttboller',
            'Wok med nudler og grønnsaker',
            'Vegetartaco med søtpotet',
            'Tapas',
            'Protein Pannekaker med jordbær',
            'Grønnsaks Wok', 
            'Haloumi Burger',
            'Biff og Grønnsaker',
            'Kyllingsalat', 
            'Sprøstekt makrell og nypotetsalat',
            'Tapas med dadler og asparges surret i serranoskinke',
            'Biff med stekt tomat, småpoteter og soppsaus',
    ],
    foodInput: null,
}

let eatThisFood = 'Middags Rullet';



