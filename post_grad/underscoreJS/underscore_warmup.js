// 1. Strip the myState object into two arrays, one filled with its keys, the other with its values.
// 2. Using these two new arrays, put them back together as an object to resemble the original myState object.
// 3. Alert each of the key - value pairs of the myState object.
// 4. Return just the names of the businesses from the businesses array.
// 5. Return the object containing “Microsoft”.
// 6. Return all the businesses that are located in Bellevue in a new array.
// 7. Sort the businesses based on the city in ascending order and return the array.
// 8. Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]

var myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};

// .pluck()
//var avengerNames = _.pluck(avengers_array, 'name');
let myStateKeys = _.pluck(myState, 'key');
let myStateValues = _.pluck(myState, 'value');
console.log(myStateKeys);
console.log(myStateValues);

var businesses = [
    {
        name: "Coding Dojo",
        city: "Bellevue"
    },
    {
        name: "Facebook",
        city: "Mountain View"
    },
    {
        name: "Microsoft",
        city: "Redmond"
    },
    {
        name: "Expedia",
        city: "Bellevue"
    }
];
