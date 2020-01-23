/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const mdp1Value = document.getElementById("pass-one").value;
        const mdp2Value = document.getElementById("pass-two").value;
        const mdp1 = document.getElementById("pass-one");
        const mdp2 = document.getElementById("pass-two");

        // console.log(inputBorder[0]);

        if (mdp1Value !== mdp2Value) {
            console.log("No");
            mdp1.classList.add("error");
            mdp2.classList.add("error");
        } else {
            console.log("Yes");
        }
    });
})();
