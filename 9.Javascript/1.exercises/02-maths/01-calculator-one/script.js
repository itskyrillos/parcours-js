/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        let addition = Number(op1 + op2);
        alert(addition);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        let substraction = Number(op1 - op2);
        alert(substraction);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        let multiplication = Number(op1 * op2);
        alert(multiplication);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let op1 = Number(document.getElementById("op-one").value);
        let op2 = Number(document.getElementById("op-two").value);
        let division = Number(op1 / op2);
        alert(division);
    });
})();
