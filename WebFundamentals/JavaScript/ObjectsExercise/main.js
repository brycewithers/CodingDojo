// Problem 1
console.log('problem 1');

grades = {"Kermit": "A", "Miss Piggy": "F", "Gonzo": "B+"}

grades.Kermit = "A+" ;
grades.Gonzo = "B-" ;
grades.Fozzie="C";
grades["Miss Piggy"]= "B";


console.log(grades);

// Problem 2
console.log('problem 2');

var heroes = [
    {first: 'Clark', last: 'Kent', world: 'DC'},
    {first: 'Peter', last: 'Parker', world: 'Marvel'},
    {first: 'Bruce', last: 'Wayne', world: 'DC'}
]

console.log(heroes[0].world);

// Problem 3
console.log('problem 3');

for (var i=0; i < heroes.length; i++ ) {
    console.log(heroes[i].first);
}

// Problem 4
console.log('problem 4');
for (var i=0; i < heroes.length; i++ ) {
    if (heroes[i].world == "DC")  {
       console.log(heroes[i].first);
    }
}