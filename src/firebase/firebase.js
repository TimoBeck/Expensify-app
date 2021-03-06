import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};


// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//                      expenses.push({
//                          id: childSnapshot.key,
//                          ...childSnapshot.val()
//                      });
//              });
// })


//database.ref('notes/-LB8PRgKikpPOLqsAJ0-').remove();
// database.ref('expenses').push({
//     description:'Shoes',
//     note:'Daily expense',
//     amount: 1556,
//     createdAt:'12/03/18'
// })


// database.ref('notes').push({
//     title:'Course Topic',
//     body:'React, Native, Angular, Python'
// });




// database.ref().on('value', (snapshot) =>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
// }); 

// setTimeout(() =>{
//     database.ref('name').set('Willy');
// }, 3500)


// const onValueChange = database.ref().on('value', (snapshot) =>{
//     console.log(snapshot.val());
// }, (e)=>{
//     console.log();
// });

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) =>{
//       console.log('Error fetching the data',e);
//   })

// database.ref().set({
//     name: "Timothee Becker",
//     age: 26,
//     stressLevel: 6,
//     job:{
//         title: 'Actuary',
//         company: 'Zurich'
//     },
//     location:{
//         city: "Phoenix",
//         country: "United States"
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });
 
// database.ref().update({
//     stressLevel: 9,
//     'job/company':'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//     console.log('Removed data');
// }).catch((e) => {
//     console.log('Not removed')
// });