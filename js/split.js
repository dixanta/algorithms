/*
 String Split by single character Algorithms
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
*/

var text = " this is hello world";

console.log(split(text,'i'));
//console.log(text.split('i'));

function split(text, pattern) {
    var length = text.length;
    var prev = '';
    var result = [];
    for (var i = 0; i < length; i++) {
        var c = text.charAt(i);

        if (c == pattern) {
            result.push(prev);
            prev = '';
        } else {
            prev=prev.concat(c);
        }
        if (i == length - 1 && c != ' ') {
            result.push(prev);
        }
    }
    return result;
}
