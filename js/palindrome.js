/**
 * Different ways of solving Palindrome 
 * using javascript
 * Written by: Dixanta Bahadur Shrestha
 * Creators Institute of Business & Technology
 * https://creators.institute
 * https://www.facebook.com/creators.ibt
 */
 
function palindrome(text){
    return text===text.split("").reverse().join("");
}

function palindromeLoop(text){
    result="";
    for(let i=text.length-1;i>=0;i--){
        result+=text.charAt(i);
    }
    return text==result;
}

function palindromeSecondLoop(text){
    var i=0,end=text.length;
        while(i<=end-1){
            if(text.charAt(i)!=text.charAt(end-1)){
                return false;
            }
            i++;
            end--;
        }   
    return true;
}

console.log(palindromeSecondLoop("hello"));
console.log(palindromeSecondLoop("madam"));
console.log(palindromeSecondLoop("maddam"));
console.log(palindromeSecondLoop("maddam1"));
console.log(palindromeSecondLoop("maddam1"));
