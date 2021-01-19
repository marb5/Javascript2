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