/**
 * Binary Sort Revised Algorithm
 * using javascript
 * Written by: Dixanta Bahadur Shrestha
 * Creators Institute of Business & Technology
 * https://creators.institute
 * https://www.facebook.com/creators.ibt
 */
dataset=[2,3,4,15,-1,13,12,6,7,8];
end=dataset.length;
for(var i=1;i<dataset.length;i++){
    if(dataset[i]<dataset[i-1]){       
        for(var j=0;j<i;j++){
                console.log(i,j,dataset[i],dataset[j]);
                if(dataset[i]<dataset[j])
                {
                    temp=dataset[i];
                    dataset[i]=dataset[j];
                    dataset[j]=temp;
                }
        }  
    }
 }

console.log(dataset);
