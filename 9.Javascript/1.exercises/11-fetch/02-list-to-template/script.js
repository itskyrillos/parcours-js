/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code; here
    document.getElementById("run").addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:3000/heroes");
            console.log(response);
            const jsonData = await response.json();
            console.log(jsonData);

            // const template = document.getElementById("tpl-hero");
            // const cloneTemplate = template.cloneNode(true);
            // console.log(cloneTemplate);

            let output = jsonData
                .map(hero => {
                    return `<li class="hero">
                                <h4 class="title">
                                    <strong class="name">${hero.name}</strong>
                                    <em class="alter-ego">${hero.alterEgo}</em>
                                </h4>
                                <p class="powers">${hero.abilities.join(
                                    ", "
                                )}</p>
                            </li>`;
                })
                .join("");

            console.log(output);
            document.getElementById("target").innerHTML = output;
        } catch (error) {
            console.error(error);
        }
    });
})();
