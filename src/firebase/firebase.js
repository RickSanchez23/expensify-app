import * as firebase from "firebase";

/*const firebaseConfig = {
    apiKey: "AIzaSyA5C69Pgj5xdFqbZZRUz3OfiQmiKFoxn4I",
    authDomain: "expensify-e60d9.firebaseapp.com",
    databaseURL: "https://expensify-e60d9.firebaseio.com",
    projectId: "expensify-e60d9",
    storageBucket: "expensify-e60d9.appspot.com",
    messagingSenderId: "303129891555",
    appId: "1:303129891555:web:7de76d22d01223b9ac6bd6"
};*/

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};


/*
FIREBASE_API_KEY AIzaSyA5C69Pgj5xdFqbZZRUz3OfiQmiKFoxn4I,
app.js:12 FIREBASE_AUTH_DOMAIN expensify-e60d9.firebaseapp.com,
app.js:13 FIREBASE_DATABASE_URL https://expensify-e60d9.firebaseio.com,
app.js:14 FIREBASE_PROJECT_ID expensify-e60d9,
app.js:15 FIREBASE_STORAGE_BUCKET expensify-e60d9.appspot.com,
app.js:16 FIREBASE_MESSAGING_SENDER_ID 303129891555,
app.js:17 FIREBASE_APP_ID 1:303129891555:web:7de76d22d01223b9ac6bd6

FIREBASE_API_KEY AIzaSyA5C69Pgj5xdFqbZZRUz3OfiQmiKFoxn4I,
    app.js:12 FIREBASE_AUTH_DOMAIN expensify-e60d9.firebaseapp.com,
    app.js:13 FIREBASE_DATABASE_URL https://expensify-e60d9.firebaseio.com,
    app.js:14 FIREBASE_PROJECT_ID expensify-e60d9,
    app.js:15 FIREBASE_STORAGE_BUCKET expensify-e60d9.appspot.com,
    app.js:16 FIREBASE_MESSAGING_SENDER_ID 303129891555,

*/


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//child_removed => when a child removed from node
//child_added => when a child added to node
database.ref('expenses').on('child_changed' , snapshot => {

    console.log(`child with ${snapshot.key} id and ${snapshot.val().toString()} data has been changed!`);
} );


export { firebase , database as default }

/*
database.ref('expenses').on('value' , snapshot => {
        const expenses = [] ;
        snapshot.forEach(snapshotChild => {
            expenses.push({
                id : snapshotChild.key,
                ...snapshotChild.val()
            });
        });

        console.log(expenses);
    });
*/

/*database.ref('expenses').push({
    description: "Rent",
    amount: '190$',
    createAt: moment().subtract(4, "days").valueOf(),
});
database.ref('expenses').push({
    description: "Coffee",
    amount: '2$',
    createAt: moment().subtract(2, "days").valueOf(),
});
database.ref('expenses').push({
    description: "Gas bill",
    amount: '5.3$',
    createAt: moment().subtract(1, "days").valueOf(),
});*/

/*
const databaseListener = database.ref().on( 'value',snapshot => {
    console.log('data' , snapshot.val())

});
*/


/*
database.ref('skills').push({
    time : "1 year" ,
    title : "Android Developer"
})

database.ref('skills').push({
    time : "6 month" ,
    title : "React Developer"
})
*/


/*database.ref().set({
    name : 'Mehdi Ghorbani' ,
    age : 22 ,
    isMarried : false ,
    stressLevel : 6 ,
    job : {
        title  : 'Software developer' ,
        company : 'Selected.org'
    },
    location : {
        country : 'Iran' ,
        city : 'Isfahan'
    }
});
database.ref('location').update({
    city : 'Tehran'

})*/

/*

const databaseListener = database.ref().on( 'value',snapshot => {
    console.log('data' , snapshot.val())

} );

setTimeout(()=>{

    database.ref().update({
        age : 24
    });
} , 3000);

setTimeout(()=>{

  database.ref().off(databaseListener);

} , 7000);


setTimeout(()=>{

    database.ref().update({
        age : 36
    });
} , 10000);


*/


/*

database.ref('location/city').once('value').then(snapshot => {
    console.log('data' , snapshot.val())
})

*/

/*



database.ref().update({
    stressLevel : 9 ,
    'location/city' : 'Tehran' ,
    'job/company' : 'Digikala'
});
*/


