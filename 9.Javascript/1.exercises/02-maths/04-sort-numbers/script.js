/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        // let input = document.getElementById("numbers").value;
        // let list = input.split(",");
        // console.log(list);

        var nums = document.getElementById("numbers").value;

        var tab = nums.split(",");
        console.log(tab);

        var tabInt = [];

        tab.forEach(function(num) {
            tabInt.push(parseInt(num));
        });

        tabInt.sort(function(a, b) {
            return a - b;
        });

        console.log(tabInt);

        document.getElementById("numbers").value = tabInt;
    });
})();
