// EXERCICE : PNJ
// PNJ
let character = {
    name: "jean",
    age: 25,
    items_to_give: ["pierre", "papier", "ciseaux"]
};

for (x in character) {
    console.log(character[x]);
}

// GIVE RANDOM ITEM
function giveItem(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let randomItem = character.items_to_give[giveItem(3)];
console.log(randomItem);

// EXERCICE : SHOP
// SHOP
let shop = [
    {
        title: "sword",
        physic: 30,
        magic: 10,
        minLevel: 20,
        available: true
    },
    {
        title: "axe",
        physic: 40,
        magic: 15,
        minLevel: 9,
        available: false
    },
    {
        title: "scepter",
        physic: 20,
        magic: 50,
        minLevel: 40,
        available: true
    },
    {
        title: "pebble",
        physic: 5,
        magic: 1,
        minLevel: 2,
        available: true
    }
];

//ALL OBJECTS
for (x in shop) {
    console.log(shop[x]);
}

//OBJECTS AVAILABLE
shop.forEach(el => {
    if (el.available == true) {
        console.log(el);
    }
});

//OBJECTS LEVEL 10+
shop.forEach(el => {
    if (el.minLevel >= 10) {
        console.log(el);
    }
});

//EXERCICE : PERSONNAGE
// MAIN CHARACTER
let mainCharacter = {
    name: "Bill",
    level: 23,
    life: 88,
    weapon: {
        name: "gun",
        damage: 30
    },
    attack: function() {
        return (
            this.name +
            " attaque avec l'arme " +
            "'" +
            this.weapon.name +
            "'" +
            ", les dégâts sont de " +
            this.level * this.weapon.damage
        );
    }
};
console.log(mainCharacter.attack());
