//The object below represents a single city.
//a) Write a function that takes an object as an argument and uses a for...in loop to access
//and print to the console each of those object properties and their values. Test it using
//the sydney object below.
//b) Create a new object for a different city with different properties and call your function
//again with the new object.

{
const sydney = {
        name: 'Sydney',
        population: 5_121_000,
        state: 'NSW',
        founded: '26 January 1788',
        timezone: 'Australia/Sydney'
    }
const sydney2 = {...sydney};
sydney.name = 'Popo';
console.log(sydney2);
}
{
    const Perth = {
        name: 'Perth',
        population: 2_121_000,
        state: 'WA',
        founded: '26 January 1788',
        timezone: 'Australia/Perth'
    }
const perth2 = {...Perth};
Perth.name = 'Nanny State';
console.log(perth2);
}