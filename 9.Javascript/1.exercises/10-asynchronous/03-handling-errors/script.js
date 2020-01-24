/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPersons((error, table) => {
            if (error == null) {
                table.forEach(person => {
                    console.log(person);
                });
                console.log(table);
            } else {
                console.error(error);
            }
        });
    });
})();
