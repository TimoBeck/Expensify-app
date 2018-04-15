

// const person ={
//     name: 'Timothee',
//     age: 22,
//     location: {
//         city: 'Phoenix',
//         temp: 31
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }


// Object destructuring

const adress= ['1299 S Junior Street', 'Phoenix', 'Arizona', '85281'];

const [, city, state] = adress;

console.log(`You are in ${city} ${state}.`)

const item= ['Coffee (ice)', '3.00$', '3.50$', '3.75$'];
const[Coffee, , medium] = item;

console.log(`A medium ${Coffee} costs ${medium}`);