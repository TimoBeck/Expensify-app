const add = function(a,b)
{
    return a + b;
}

const user = 
{
    name: 'Timothée',
    cities: ['Philly', 'Zurich', 'Paris'],

    printPlacedLived: function()
    {
       const that = this;
       this.cities.forEach((city) =>
       {
           console.log(name +  'has lived in ' + city)
       });
    }
};

user.printPlacedLived(); 

const multiplier =
{
     numbers: [1,2,3],
     multiplyBy: 2,
     multiply(){
         return this.numbers.map((numbers) => number * this.multiplyBy);
     }
};