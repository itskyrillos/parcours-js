/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const moi = {
        lastname: "Guillaume",
        firstname: "Cyrille",
        age: "23",
        city: "Naninne",
        country: "Belgique"
    };

    document.getElementById("run").addEventListener("click", () => {
        console.log(
            "Je m'appelle " +
                moi.firstname +
                " " +
                moi.lastname +
                ", j'ai " +
                moi.age +
                " ans et je viens de " +
                moi.city +
                " en " +
                moi.country +
                "."
        );
    });
})();
