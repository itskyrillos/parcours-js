/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    // const deleteHero = async function(heroID) {
    //     const
    // }

    document.getElementById("run").addEventListener("click", () => {
        const heroID = document.getElementById("hero-id").value;
        console.log("ID selected: " + heroID);

        const deleteHero = () => {
            return fetch("http://localhost:3000/heroes" + "/" + heroID, {
                method: "DELETE"
            })
                .then(response => console.log(response.text()))
                .catch(error => console.log(error));
        };
        deleteHero(heroID);
    });
})();
