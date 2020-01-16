/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let selectDay = document.getElementById("dob-day").value;
        console.log(selectDay);

        let selectMonth = document.getElementById("dob-month").value;
        console.log(selectMonth);

        let selectYear = document.getElementById("dob-year").value;
        console.log(selectYear);

        let birth = new Date(selectYear, selectMonth - 1, selectDay);
        console.log(birth);

        let today = new Date().getTime();
        console.log(today);

        let age = parseInt((today - birth) / 31536000000);
        console.log(age);
    });
})();
