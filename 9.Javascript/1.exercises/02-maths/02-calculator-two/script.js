/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let op1 = parseInt(document.getElementById("op-one").value);
        console.log(op1);
        let op2 = parseInt(document.getElementById("op-two").value);
        console.log(op2);

        switch (operation) {
            case "addition":
                let addition = op1 + op2;
                alert(addition);
                break;

            case "substraction":
                let substraction = op1 - op2;
                alert(substraction);
                break;

            case "multiplication":
                let multiplication = op1 * op2;
                alert(multiplication);
                break;

            case "division":
                let division = op1 / op2;
                alert(division);
                break;

            default:
                alert("*%&°§");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener("click", () => (performOperation($btn.id), false))
    );
})();
