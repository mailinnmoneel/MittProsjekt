//Model

const model = {

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


