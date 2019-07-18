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

//-----------------------------------------------------------------
//13
//Slice and Splice You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let res = arr2.slice();
    for (var i = 0; i < arr1.length; i++) {
        res.splice(n, 0, arr1[i]);
        n++;
    }
    return res;
}

frankenSplice([1, 2, 3], [4, 5], 1);

//-----------------------------------------------------------------
//14
//Falsy Bouncer
//Remove all falsy values from an array Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    var nw = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
            nw.push(arr[i])
        }
    }
    return nw;
}

bouncer([7, "ate", "", false, 9]);

//-----------------------------------------------------------------
//15
//Where do I Belong
/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
 it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).*/
function getIndexToIns(arr, num) {
    // Find my place in this sorted array
    if (!arr.length) {
        return 0;
    }
    arr.sort(function (a, b) { return a - b });

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == num) {
            return i;
        }
        if (arr[i] > num) {
            return i;
        }
    }
    return arr.length;

}
getIndexToIns([40, 60], 50);

//-----------------------------------------------------------------
//16
//Mutations
/*Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".*/
function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    if (arr[0] == arr[1]) {
        return true;
    }
    var arr1 = arr[0].split('');
    var arr2 = arr[1].split('');
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            return false
        }
    }
    return true;
}
mutation(["hello", "Hello"]);

//-----------------------------------------------------------------
//17
//Chunky Monkey
//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newarr = [];
    for (var i = 0; i < arr.length; i += size) {
        newarr.push(arr.slice(i, i + size));
    }
    return newarr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);