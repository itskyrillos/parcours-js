const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");

window.addEventListener("keydown", event => {
    let x = event.keyCode;

    switch (true) {
        case x == 38:
            up.classList.add("highlight");
            break;

        case x == 40:
            down.classList.add("highlight");
            break;

        case x == 37:
            left.classList.add("highlight");
            break;

        case x == 39:
            right.classList.add("highlight");
            break;

        default:
            break;
    }
});

window.addEventListener("keyup", event => {
    let x = event.keyCode;

    switch (true) {
        case x == 38:
            up.classList.remove("highlight");
            break;

        case x == 40:
            down.classList.remove("highlight");
            break;

        case x == 37:
            left.classList.remove("highlight");
            break;

        case x == 39:
            right.classList.remove("highlight");
            break;

        default:
            break;
    }
});
