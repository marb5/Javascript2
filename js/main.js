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