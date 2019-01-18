/*
 Array Algorithms for String Comparision
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
*/
function compareFirst(string1,string2){
    console.log("comparing %s & %s",string1,string2);
    if(string1.length==string2.length
    && string1.charAt(0)==string2.charAt(0)
    && string1.charAt(string1.length-1) && string2.charAt(string1.length-1)){
        match=true;
        revlen=string1.length-2;
        for(var i=1;i<string1.length-2;i++){
            console.log("value "+i);
            if(string1.charAt(i)!=string2.charAt(i)||
                string1.charAt(revlen)!=string2.charAt(revlen)){
                match=false;
                break;
            }else{
                revlen--;
            }
        }
        return match;
    }
    return false;
}

function compareSecond(string1,string2){
    console.log("comparing %s & %s",string1,string2);
    if(string1.length==string2.length
    && string1.charAt(0)==string2.charAt(0)
    && string1.charAt(string1.length-1) && string2.charAt(string1.length-1)){
        match=true;
        revlen=string1.length-2;
        for(var i=1;i<string1.length-2;i++){
            console.log("value "+i);
            if(string1.charAt(i)!=string2.charAt(i)){
                match=false;
                break;
            }else{
                revlen--;
            }
        }
        return match;
    }
    return false;
}

console.log(compareSecond("hello metal","hello meyal"));
console.log("------------------------------------");
console.log(compareFirst("hello metal","hello meyal"));

