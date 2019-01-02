function compare(text,pattern){
    text=text.toLowerCase();
    pattern=pattern.toLowerCase();
    var plen = pattern.length;
    var i=j=0;
    var counter=0;
    if(text.charAt(i)==text.charAt(j)
    && text.charAt(i+plen-1) == pattern.charAt(plen-1)){
        match=true;
        for(var x=i+1;x<(plen-1);x++){
            var a=text.charAt(x),b=pattern.charAt(++j);
            if(a!=b){
                match=false;
                break;
            }
        }
        return match;
    }
    return false;
}

var pattern="aaa";
var text="AAA";
console.log(compare(text,pattern));
