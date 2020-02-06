let selectElementsStartingWithA = array => {
    function firstA(item) {
        return item.toLowerCase().indexOf("a") === 0;
    }

    let startsWithA = array.filter(firstA);
    return startsWithA;
};

let selectElementsStartingWithVowel = array => {
    return "Write your method here";
};

let removeNullElements = array => {
    const filtered = array.filter(function(el) {
        return el != null;
    });
    return filtered;
};

let removeNullAndFalseElements = array => {
    for (let i = array.length; i > 0; i--) {
        if (array[i] == null || array[i] === false) {
            array.splice(i, 1);
        }
    }
    return array;
};

let reverseWordsInArray = array => {
    array.forEach(element => {
        element
            .split("")
            .reverse()
            .join("");
    });
    return array;
};

let everyPossiblePair = array => {};

let allElementsExceptFirstThree = array => {
    let newArray = array.slice(3);
    return newArray;
};

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
};

let sortByLastLetter = array => {
    return array.sort(
        (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    );
};

let getFirstHalf = string => {
    let nbr = string.length();
    let halfNbr = Math.ceil(nbr / 2);
    let halfString = string.substr(0, halfNbr);
    return halfString;
};

let makeNegative = number => {
    return "Write your method here";
};

let numberOfPalindromes = array => {
    return "Write your method here";
};

let shortestWord = array => {
    return "Write your method here";
};

let longestWord = array => {
    return "Write your method here";
};

let sumNumbers = array => {
    return "Write your method here";
};

let repeatElements = array => {
    return "Write your method here";
};

let stringToNumber = string => {
    return "Write your method here";
};

let calculateAverage = array => {
    return "Write your method here";
};

let getElementsUntilGreaterThanFive = array => {
    return "Write your method here";
};

let convertArrayToObject = array => {
    return "Write your method here";
};

let getAllLetters = array => {
    return "Write your method here";
};

let swapKeysAndValues = object => {
    return "Write your method here";
};

let sumKeysAndValues = object => {
    return "Write your method here";
};

let removeCapitals = string => {
    return "Write your method here";
};

let roundUp = number => {
    return "Write your method here";
};

let formatDateNicely = date => {
    return "Write your method here";
};

let getDomainName = string => {
    return "Write your method here";
};

let titleize = string => {
    return "Write your method here";
};

let checkForSpecialCharacters = string => {
    return "Write your method here";
};

let squareRoot = number => {
    let square = Math.sqrt(number);
    return square;
};

let factorial = number => {
    if (number === 0) {
        return 1;
    }

    return number * factorial(number - 1);
};

let findAnagrams = string => {
    return "Write your method here";
};

let convertToCelsius = number => {
    let result = (number - 32) * (5 / 9);
    return parseInt(result);
};

let letterPosition = array => {
    return "Write your method here";
};
