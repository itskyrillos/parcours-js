const div = document.querySelectorAll(".hoverMe");
const button = document.getElementById("reset");

div.forEach(event => {
    event.addEventListener("mouseover", () => {
        event.classList.remove("reappear");
        event.classList.add("disappear");
    });
});

button.addEventListener("click", () => {
    div.forEach(event => {
        event.classList.remove("disappear");
        event.classList.add("reappear");
    });
});
