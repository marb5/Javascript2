let myName = "Tomasz";

//block range variable
(function () {
    let letter = 'A';

    if (letter.length) {
        //console.log(letter); // cannot access letter
        let letter = 'B';
        console.log(letter); // return B
    }

    console.log(letter); // return A
})();

//function range variable
(function () {
    var letter = 'A';

    if (letter.length) {
        console.log(letter); // return A
        var letter = 'B';
        console.log(letter); // return B
    }

    console.log(letter); // return B
})();

const example = 200;
console.log(example);
//example = 300; //error

const arrayExample = ["pierwszy"];
console.log(arrayExample);
//arrayExample = ["pierwszy", "drugi"]; //can't assign new objekt to const variable, error
arrayExample[1] = "drugi"; //we can modify object by adding new element
console.log(arrayExample);

//hoisting
console.log(varVariable); //hoisting - przenoszenie deklaracji zmiennych (bez inicjalizacji)
                          //przez interpreter przed wykonanie kodu                        
//console.log(letVariable); //not work for let
//console.log(constVariable); //not work for const
var varVariable = 1;
//let letVariable = 1;
//const constVariable = 1;

const newNumber = 123.45;

newNumber.toFixed();
newNumber.toFixed(1);
//123.toFixed(0); //wrong
123..toFixed(0);

newNumber.toString();
newNumber.toString(2);
123..toString(16);
newNumber.toExponential();

const userName = "Marcin"; // "" ''
const userName2 = `Marcin`; //super string

userName.concat(" Bielen");
userName + " Bielen";
`${userName} Bielen`;

userName.indexOf('c'); //check if c is in string, start searching from beginning
userName.lastIndexOf('c'); //same up but from ending
userName.includes('w'); //if letter w is in string

"   word  ".trim() //delete white signs
"word".repeat(5)

userName.slice(2, 5)

"1" == true; //true
"1" === true; //false

