/**
 * Naive string pattern matching algorithm
 * Written By: Dixanta Bahadur Shrestha
 * Creators Institute of Business & Technology
 */

var txt="abcabcdcabcabababaabc";
var pat="abc";

function naive(txt,pat){
    txt=txt.toLowerCase();
    pat=pat.toLowerCase();
    var txtLength=txt.length;
    var patLength=pat.length;

    var counter=0;
    for(var i=0;i<=(txtLength-patLength);i++){
        //console.log(txt.charAt(i));
        var total=0;
        for(var j=0;j<patLength;j++){
            if(txt.charAt(i+j)==pat.charAt(j)){
                total++;
            }
        }
        if(total==patLength){
            counter++;
        }
    }
    return counter;
}
console.log(naive(txt,pat));
