/**
 * Knuth-Morris-Pratt string matching
 * Written By: Dixanta Bahadur Shrestha
 * Creators Institute of Business & Technology
 */
var text="aaabbbcabcabbbcabcabbbcaaabbbcabcccca";
var pattern="abc";

var i=0,j=0;
var counter=0;
var index=0;

while(i<text.length){
    
    if(text.charAt(i)==pattern.charAt(j)){
        i++;
        j++;
        if(pattern.length==j){
            //console.log("match found");
            counter++;
        }
    }else{
        i=++index;
        j=0;
    }
}
console.log("counter %d",counter);

