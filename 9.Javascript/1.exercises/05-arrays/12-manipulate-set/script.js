/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise"
    ]);
    console.log(fruits);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        fruits.forEach(function(x) {
            if (x === "pomme") {
                fruits.delete(x);
                fruits.add("bananne");
            }
            if (x === "cerise") {
                fruits.delete(x);
                fruits.add("kiwi");
            }
        });

        console.log(fruits);
    });
})();
