let CreationTableauLangages = () => {
    return (langages = ["Html", "CSS", "Java", "PHP"]);
};

let CreationTableauNombres = () => {
    return (nombres = [0, 1, 2, 3, 4, 5]);
};

let RemplacementElement = langages => {
    langages.splice(2, 1, "Javascript");
    return langages;
};

let AjoutElementLangages = langages => {
    langages.splice(4, 0, "Ruby", "Python");
    return langages;
};

let AjoutElementNombres = nombres => {
    nombres.splice(0, 0, -2, -1);
    return nombres;
};

let SuppressionPremierElement = langages => {
    langages.shift();
    return langages;
};

let SuppressionDernierElement = langages => {
    langages.pop();
    return langages;
};

let ConversionChaineTableau = reseaux_sociaux_chaine => {
    let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
    return reseaux_sociaux;
};

let ConversionTableauChaine = langages => {
    let langages_chaine = langages.join(",");
    return langages_chaine;
};

let TriTableau = reseaux_sociaux => {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
};

let InversionTableau = reseaux_sociaux => {
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
};
