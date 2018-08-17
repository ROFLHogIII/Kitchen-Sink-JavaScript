var name = 'Richard Garner';
const states = 50;
var num1 = 5 + 4;
console.log(name, states, num1);

var index = 0; //set an index variable to be 0
var L = 'L'//created a desired variable with only one letter, the desireable one

if (name.charCodeAt(index) == L.charCodeAt(index)) {
    console.log('Next!')
} else {
    console.log('Back of the line!')
};
//as long as the Character code of the name is equal to the character code of the letter in Variable "L", "Next" will be displayed. Elsewise, "Back of the Line" will be displayed.

function sayHello() {
    console.log('Hello world');
}
sayHello();

//wow, this one was a *** to work on.
var names = ['Charles', 'Abby', 'James', 'John'];
var ages = [21, 27, 18, 17];


for (let index = 0; index < 4; index++) {
    checkAge(names[index], ages[index]);
}

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    } else {
        console.log('Congrats ' + name + ', you did the thing!')
    }
};

var veggies = ['Cucuber', 'Broccoli', 'Spinach', 'Squash']
for (let index = 0; index < veggies.length; index++) {
    console.log(veggies[index])
    
};

var GA01 = {
    name: 'Milfeulle Sakuraba',
    age: 21,
};
var GA02 = {
    name: 'Ranpha Franboise',
    age: 22,
};
var GA03 = {
    name: 'Mint Blancmanche',
    age: 20,
};
var GA04 = {
    name: 'Forte Stollen',
    age: 26,
};
var GA05 = {
    name: 'Vanilla H',
    age: 17,
};
var GA06 = {
    name: 'Chitose Karasuma',
    age: 21,
};
var GA = [GA01, GA02, GA03, GA04, GA05, GA06];

for (let i in GA) {
    checkAge(GA[i].name, GA[i].age)
};
console.log(GA)
// christ in heaven that was rough

function getLength(any) {
    return any.length,
    console.log(any),
    console.log(any.length)

}
var length = getLength('Hello World')

if (length % 2 == 0 ) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}