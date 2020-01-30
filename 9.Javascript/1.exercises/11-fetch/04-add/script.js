/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const heroName = document.getElementById("hero-name").value;
        const heroAlterEgo = document.getElementById("hero-alter-ego").value;
        const heroPowers = document.getElementById("hero-powers").value;

        if (heroName == "" || heroAlterEgo == "" || heroPowers == "") {
            alert("Remplir tous les champs");
        } else {
            console.log(heroName);
            console.log(heroAlterEgo);
            console.log(heroPowers);

            const sendHttpRequest = (method, url, data) => {
                return fetch(url, {
                    method: method,
                    body: JSON.stringify(data),
                    headers: data ? { "Content-Type": "application/json" } : {}
                }).then(response => {
                    if (response.status >= 400) {
                        // !response.ok
                        return response.json().then(errResData => {
                            const error = new Error("Something went wrong!");
                            error.data = errResData;
                            throw error;
                        });
                    }
                    return response.json();
                });
            };

            // const getData = () => {
            //     sendHttpRequest("GET", "http://localhost:3000/heroes").then(
            //         responseData => {
            //             console.log(responseData);
            //         }
            //     );
            // };
            // getData();

            const sendData = () => {
                sendHttpRequest("POST", "http://localhost:3000/heroes", {
                    name: heroName,
                    alterEgo: heroAlterEgo,
                    abilities: heroPowers
                })
                    .then(responseData => {
                        console.log(responseData);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            };

            sendData();
        }
    });
})();
