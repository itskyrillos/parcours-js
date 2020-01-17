/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here

        let list = [];
        for (let i = 1; i < 22; i++) {
            if (i % 2 == 0) {
                console.log(i + " -> nombre pair");
                let pair = Math.sqrt(i);
                console.log(pair);

                let calculRound = pair;
                let result = Math.round(calculRound * 100) / 100;
                console.log(result);
                list.push(" " + result);
            } else {
                console.log(i + " -> nombre impair");
            }
        }

        alert(list);
    });
})();
