/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        const year = document.getElementById("year").value;
        console.log(year);
        let lucky = [];
        let listMonth = Array(
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre"
        );
        console.log(listMonth[11]);

        for (let i = 0; i < 12; i++) {
            const month = new Date(year, i, 13);
            let day = month.getDay();

            if (day == 5) {
                let show = listMonth[month.getMonth()];
                lucky.push(" " + show);
            }
        }
        alert(lucky);
    });
})();
