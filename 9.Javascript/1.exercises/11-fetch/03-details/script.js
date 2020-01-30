/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     // your code here
//     document.getElementById("run").addEventListener("click", async () => {
//         try {
//             const response = await fetch("http://localhost:3000/heroes");
//             console.log(response);
//             const jsonData = await response.json();
//             console.log(jsonData);
//             let i = jsonData[1];

//             // const template = document.getElementById("tpl-hero");
//             // const cloneTemplate = template.cloneNode(true);
//             // console.log(cloneTemplate);

//             const output = hero => {
//                 return `<li class="hero">
//                                 <h4 class="title">
//                                     <strong class="name">${
//                                         hero[i].name
//                                     }</strong>
//                                     <em class="alter-ego">${
//                                         hero[i].alterEgo
//                                     }</em>
//                                 </h4>
//                                 <p class="powers">${hero[i].abilities.join(
//                                     ", "
//                                 )}</p>
//                             </li>`;
//             };

//             console.log(output);

//             document.getElementById("target").innerHTML = output;
//         } catch (error) {
//             console.error(error);
//         }
//     });
// })();

(() => {
    // your code here

    let template = document.getElementById("tpl-hero").cloneNode(true); // je stock dans 'template' un clone du noeud #tpl-hero (voir html)

    let clone = document.importNode(template.content, true); // J'importe le contenu du noeud dans la variable 'clone'
    document.getElementById("target").appendChild(clone); // Je créée dans la balise 'target' le code HTML de 'clone'

    document.getElementById("run").addEventListener("click", () => {
        let i = parseInt(document.getElementById("hero-id").value);

        async function showHero() {
            // fonction asynchrone pour récupérer des données
            try {
                let response = await fetch("http://localhost:3000/heroes"); // On attend de récupérer le fetch du localhost qui renvoie une 'response'
                let hero = await response.json(); // on transforme la response du fetch en json

                let name = document.querySelector(`.hero>.title>.name`); // Sélectionner la bonne balise
                let alterEgo = document.querySelector(
                    `.hero>.title>.alter-ego`
                );
                let powers = document.querySelector(`.hero>.powers`);

                name.innerHTML = hero[i].name; // Insérer le contenu de chaque héro du tableau dans les balises
                alterEgo.innerHTML = hero[i].alterEgo;
                powers.innerHTML = hero[i].abilities;
            } catch (error) {
                console.log(error);
            }
        }
        showHero();
    });
})();
