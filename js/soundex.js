/*
 String SoundEx Algorithms
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
*/

function soundex(param){
    result=param[0].toUpperCase();
    param=param.replace(/[hw]/gi,'');
    param=param.replace(/[bfpv]/gi,'1');
    param=param.replace(/[cgjkqsxz]+/gi,'2');
    param=param.replace(/[dt]+/gi,'3');
    param=param.replace(/l+/gi,'4');
    param=param.replace(/[mn]+/gi,'5');
    param=param.replace(/r+/gi,'6');
    param=param.substring(1,param.length);
    param=param.replace(/[aeiouy]+/gi,'');
    result +=param.substring(0,3);

    if(result.length<4){
        result += '0'.padStart(4-result.length,'0');
    }
    return result;
}
