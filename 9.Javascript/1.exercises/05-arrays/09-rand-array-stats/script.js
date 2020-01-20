/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        const table = [];

        // RANDOM NUMBERS
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        for (let i = 1; i <= 10; i++) {
            let chiffre = (document.getElementById(
                "n-" + i
            ).innerHTML = getRandomInt(100));
            table.push(chiffre);
        }
        console.log(table);

        // MIN NUMBER
        let min = table.reduce(function(a, b) {
            return Math.min(a, b);
        });
        console.log(min);
        document.getElementById("min").innerHTML = min;

        // MAX NUMBER
        let max = table.reduce(function(a, b) {
            return Math.max(a, b);
        });
        console.log(max);
        document.getElementById("max").innerHTML = max;

        // ADDITION ALL NUMBERS
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;

        document.getElementById("sum").innerHTML = table.reduce(reducer);

        // AVERAGE
        function numAverage(a) {
            let b = a.length,
                c = 0,
                i;
            for (i = 0; i < b; i++) {
                c += Number(a[i]);
            }
            return c / b;
        }

        let average = numAverage(table);
        console.log(average);
        document.getElementById("average").innerHTML = average;
    });
})();
