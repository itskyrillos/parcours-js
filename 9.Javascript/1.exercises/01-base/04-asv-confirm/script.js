/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// your code here
let response = false;

do {
    let userAge = prompt("Quel est ton âge ?");
    let userSexe = prompt("Quel est ton sexe ?");
    let userVille = prompt("Quelle ville habites-tu");
    response = confirm(
        "Pas d'erreur ? " + userAge + ", " + userSexe + ", " + userVille + "."
    );
} while (response == false);
