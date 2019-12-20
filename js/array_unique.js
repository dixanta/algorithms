/*
 Javascript Code to print unique array values
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
 https://creators.institute
*/
var dataset = [1,3,3,2,1,5,4,3,3,1];



for(var i=0;i<dataset.length;i++){
    match=false;
    end=i;
    for(var j=0;j<end;j++){
        if(dataset[i]==dataset[j]|| dataset[i]==dataset[end-1]){
            match=true;
            break;
        }
        end--;
    }
    if(!match){
        console.log(dataset[i]);
        
    }
}
