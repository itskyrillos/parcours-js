const coordX = document.getElementById("p-x");
const coordY = document.getElementById("p-y");

window.addEventListener("mousemove", function(e) {
    let posX = e.x;
    let posY = e.y;

    coordX.innerHTML = "Axe X: " + posX;
    coordY.innerHTML = "Axe Y: " + posY;
});

// CUSTOM CURSOR
document.body.style.cursor = "none";

let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let follow = document.createElement("div");
follow.classList.add("follow");
document.body.appendChild(follow);

function move(obj, event) {
    obj.style = "";
    obj.style.top = event.clientY + "px";
    obj.style.left = event.clientX + "px";
}

if (cursor) {
    window.addEventListener("mousemove", function(event) {
        let e = event;
        let t = e.target;
        let f = follow;
        let c = cursor;

        if (t.tagName == "A") {
            c.style.backgroundColor = "transparent";

            f.style.top = t.offsetTop + "px";
            f.style.left = t.offsetLeft + "px";
            f.style.width = t.clientWidth + "px";
            f.style.height = t.clientHeight + "px";

            f.classList.add("on-focus");
        } else {
            move(c, e);
            move(f, e);
            f.classList.remove("on-focus");
        }
    });
}

function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        let args = [
            "\n %c Made with ♥ by Cyrille Guillaume \n",
            "color: #fff; background: #e43333; padding:5px 0;"
        ];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log("Made with love ♥ Cyrille Guillaume");
    }
}

sayHello();
