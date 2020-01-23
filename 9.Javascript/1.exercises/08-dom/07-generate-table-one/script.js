/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("target").innerHTML= addTable;

    let addTable = newTable()

    function newTable(){
        for (var i=0; i<3; i++){
            document.createElement('tr');
    }
})();
