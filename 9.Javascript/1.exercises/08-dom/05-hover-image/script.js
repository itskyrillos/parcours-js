/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let image = document.querySelector("img");
    let original = image.src;
    let newImage = image.dataset.hover;

    // document.querySelector("img").getAttribute("src")
    // document.querySelector("img").getAttribute("data-hover")

    image.addEventListener("mouseover", () => {
        image.src = newImage;
        console.log("on");
    });

    image.addEventListener("mouseout", () => {
        image.src = original;
        console.log("off");
    });
})();
