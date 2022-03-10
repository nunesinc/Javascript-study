//Data Sets
console.log(" --- Data Sets  : ---");
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3


//Methods
console.log(" --- Methods  : ---");
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH


/*
    The push method adds values to the end of an array, and the pop method
    does the opposite, removing the last value in the array and returning it
*/
console.log(" --- Methods 2  : ---");
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


//objects
console.log(" --- Objects  : ---");
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
    };
    console.log(day1.squirrel);
    // → false
    console.log(day1.wolf);
    // → undefined
    day1.wolf = false;
    console.log(day1.wolf);
    // → false

/*
    The delete operator cuts off a tentacle from such an octopus. It is a unary
    operator that, when applied to an object property, will remove the named
    property from the object. This is not a common thing to do, but it is possible
*/
console.log(" --- Objects 2  : ---");
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


/* 
    To find out what properties an object has, you can use the Object.keys
    function. You give it an object, and it returns an array of strings—the object’s
    property names.
*/
console.log(" --- object.keys  : ---");
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]

/* 
    There’s an Object.assign function that copies all properties from one object into another.
*/
console.log(" --- Object.assign  : ---");
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}


/* 
    We will represent the journal that Jacques keeps as an array of objects.
*/
console.log(" --- objects array  : ---");
let journal = [
{events: ["work", "touched tree", "pizza",
"running", "television"],
squirrel: false},
{events: ["work", "ice cream", "cauliflower",
"lasagna", "touched tree", "brushed teeth"],
squirrel: false},
{events: ["weekend", "cycling", "break", "peanuts",
"beer"],
squirrel: true},
/* and so on... */
];
//console.log(journal);

/*
    With objects, there is a difference between having two references to the same object
    and having two different objects that contain the same properties. 

    The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2.
     They are said to have the same identity. 
     The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life
*/
console.log(" --- Multability  : ---");
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10


console.log(" --- Multability - bindings : ---");
const score = {visitors: 0, home: 0};
// This is okay
console.log(score.visitors = 1);
// This isn't allowed
///score = {visitors: 1, home: 1};