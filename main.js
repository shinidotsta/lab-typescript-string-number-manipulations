"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat("end"));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        var alphas;
        for (var i = 0; i < sentence.length; i++) {
            var j = 0;
            alphas[j] = sentence.charAt[i];
            j++;
            console.log(alphas[i]);
            console.log(" ");
        }
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        for (var j = 0; j < str.length; j++) {
            var ch = str.charAt(j);
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
                count++;
            }
        }
        console.log(count);
    };
    return StringManipulations;
}());
exports.StringManipulations = StringManipulations;
var obj = new StringManipulations();
obj.print("Prograds");
//obj.printWithSpace("Prograds");
obj.findVowel("Prograds");
///////////////////////
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = 0;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = 0;
                break;
            }
            else
                flag = 1;
        }
        if (flag == 1)
            console.log("prime no");
        else
            console.log("Not a prime no");
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var sum = 0;
        while (num > 0 || sum > 9) {
            if (num == 0) {
                num = sum;
                sum = 0;
            }
            sum += num % 10;
            num /= 10;
        }
        if (sum == 1)
            console.log("magic no");
        else
            console.log("Not magic no");
    };
    return NumbersManipulations;
}());
var obj2 = new NumbersManipulations();
obj2.findPrime(6);
obj2.findMagic(199);
