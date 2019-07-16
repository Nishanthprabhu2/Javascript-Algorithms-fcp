//#1
//The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
//convert-celsius-to-fahrenheit
function convertToF(celsius) {
    //let fahrenheit;

    return celsius * (9 / 5) + 32;
}

convertToF(30);
//-----------------------------------------------------------------------------

//#2
//reverse-a-string
function reverseString(str) {
    return str.split("").reverse().join("");
}

reverseString("hello");

//-----------------------------------------------------------------------------

//#3
//factorialize-a-number
function factorialize(num) {
    if (num < 0) {
        return -1
    }
    if (num == 0) {
        return 1
    }
    return num * factorialize(num - 1);
}

factorialize(5);
//-----------------------------------------------------------------------------

//#4
//Find the Longest Word in a String
function findLongestWordLength(str) {
    var longLength = 0;
    var strarr = str.split(' ');

    for (var i = 0; i < strarr.length; i++) {
        if (strarr[i].length > longLength) {
            longLength = strarr[i].length;
        }
    }
    return longLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//-----------------------------------------------------------------------------

//#5
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
    // You can do this!
    var finalarr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = 0;
        if (Math.sign(arr[i][0]) == -1) {
            temp = arr[i][0];
        }
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > temp) {
                temp = arr[i][j];
            }
        }
        finalarr.push(temp);
    }
    return finalarr;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

//------------------------------------------------------------------
//6
//largest of arrays
function largestOfFour(arr) {
    // You can do this!
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        var large = arr[i][0];
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > large) { large = arr[i][j] }
        }
        res.push(large);
    }
    return res;
}

//-----------------------------------------------------------------
//7
//Confirm the Ending
function confirmEnding(str, target) {
    return str.substring(str.length - target.length, str.length) == target ? true : false
}

confirmEnding("Bastian", "n");

//-----------------------------------------------------------------
//8
//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    // repeat after me
    return Math.sign(num) == -1 ? "" : multiply();
    function multiply() {
        var res = ""
        for (var i = 0; i < num; i++) {
            res += str
        }
        return res;
    }
}

repeatStringNumTimes("abc", 3);
//or(refered from guide.freecodecamp.com)
function repeatStringNumTimes(str, num) {
    var accumulatedStr = '';

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

//-----------------------------------------------------------------
//9
//Truncate a String
function truncateString(str, num) {
    // Clear out that junk in your trunk
    console.log(str.substring(0, num))
    return str.length > num ? str.substring(0, num) + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//-----------------------------------------------------------------
//10
//find Keepers
function findElement(arr, func) {
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });

//-----------------------------------------------------------------
//11
//BOO-WHO
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof (bool) == "boolean" ? true : false;
}

booWho(null);

//-----------------------------------------------------------------
//12
//Title case a Sentence
function titleCase(str) {
    var strarr = str.split(' ');
    for (var i = 0; i < strarr.length; i++) {
        strarr[i] = strarr[i].substring(0, 1).toUpperCase() + strarr[i].substring(1, strarr[i].length).toLowerCase();

    }
    return strarr.join(' ');
}

titleCase("I'm a little tea pot");


