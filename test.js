function firstThreeLetter(str) {
    var newString = '';
    for(var i = 0; i < 3; i++) {
        newString += str[i];
    }
    return newString;
}



var string = "hello";
string = firstThreeLetter(string);

newString = "hello World";

console.log(string, '--this is the new string');
