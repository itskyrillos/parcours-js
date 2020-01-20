/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true }
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré"
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        function getRandomBird(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let x = getRandomBird(11);

        function getRandomAdj(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let y = getRandomAdj(10);

        const adj = [...adjectives];
        let nomOiseau = birds[x].name;
        let oiseauAdj = adj[y];

        if (birds[x].fem == true) {
            let nomFem = "La " + nomOiseau + " " + oiseauAdj + "e";
            document.getElementById("target").innerHTML = nomFem;
        } else {
            let nomMas = "Le " + nomOiseau + " " + oiseauAdj;
            document.getElementById("target").innerHTML = nomMas;
        }
    });
})();
