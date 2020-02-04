console.log("test");

window.addEventListener("keydown", e => {
    let x = e.keyCode;
    let div = document.getElementById("character");

    switch (true) {
        case x == 49:
            div.style.backgroundColor = "red";
            break;

        case x == 50:
            div.style.backgroundColor = "green";
            break;

        case x == 51:
            div.style.backgroundColor = "purple";
            break;

        case x == 52:
            div.style.backgroundColor = "blue";
            break;

        case x == 53:
            div.style.backgroundColor = "cyan";
            break;

        case x == 54:
            div.style.backgroundColor = "black";
            break;

        case x == 55:
            div.style.backgroundColor = "#CD5C5C";
            break;

        case x == 56:
            div.style.backgroundColor = "#F08080";
            break;

        case x == 57:
            div.style.backgroundColor = "RGB(255, 160, 122)";
            break;

        case x == 48:
            div.style.backgroundColor = "yellow";
            break;

        default:
            div.style.backgroundColor = "white";
            break;
    }
});
