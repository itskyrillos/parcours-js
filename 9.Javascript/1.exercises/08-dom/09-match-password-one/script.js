/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        const mdp1 = document.getElementById("pass-one").value;
        const mdp2 = document.getElementById("pass-two").value;
        const inputBorder = document.getElementsByTagName("input");

        // console.log(inputBorder[0]);

        if (mdp1 !== mdp2) {
            console.log("No");
            inputBorder[0].style.borderColor = "red";
            inputBorder[1].style.borderColor = "red";

            // document.getElementById("pass-one").style.borderColor = "red";
            // document.getElementById("pass-two").style.borderColor = "red";
        } else {
            console.log("Yes");
            inputBorder[0].style.borderColor = "green";
            inputBorder[1].style.borderColor = "green";

            // document.getElementById("pass-one").style.borderColor = "green";
            // document.getElementById("pass-two").style.borderColor = "green";
        }
    });
})();
