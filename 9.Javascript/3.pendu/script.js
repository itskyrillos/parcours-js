const word = ["B", "O", "N", "J", "O", "U", "R"];
let wordFound = [];
let badLetter = [];
let badLenght = badLetter.length;
if (badLength == 5) {
    alert("Perdu...");
}

while (badLength != 5) {
    let letter = window.prompt("Entrez une lettre");

    function guessLetter() {
        word.forEach(el => {
            if (letter == /[A-z]/) {
                if (letter == el) {
                    wordFound.push(letter);
                } else {
                    badLetter.push(letter);
                }
            }
        });

        // word.forEach(el => {
        //     if (letter == /[A-z]/) {
        //         if (letter == el) {
        //             wordFound.push(letter);
        //         } else {
        //             badLetter.push(letter);
        //         }
        //     }
        // });
    }
    guessLetter();
}
