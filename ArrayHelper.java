public class ArrayHelper{

    public static int[] merge(int[] data1,int[] data2){

        int[] finalData=new int[data1.length+data2.length]; 
        int index=0,i=0,j=0;
        boolean firstComplete=false;

        while(index<finalData.length){
            if(!firstComplete){
               // System.out.printf("[%d] = %d\r\n",i,data1[i]);
                finalData[index]=data1[i];
                i++;
                if(i==data1.length){
                    firstComplete=true;
                }
            }else{
               // System.out.printf("[%d] = %d\r\n",j,data2[j]);
                finalData[index]=data2[j];
                j++;
            }
            index++;
        }
        return finalData;
    }
    public static int sum(int[] data){
        int total=0;
        for(int i=0;i<data.length;i++){
            total +=data[i];
        }
        return total;
    }
    public static int max(int[] data){
        int index=0,j=1;
        for(int i=0;i<data.length;i++){
            if(j<data.length){
                //System.out.printf("checking %d & %d\r\n",data[index],data[j]);
                if(data[index]<data[j]){
                    index=j;
                }
                j++;
                //System.out.print("checking %d & %d\r\n",data[i],data[j]);
            }
        }
        return data[index];
    }

    public static int min(int[] data){
        int i=0,index=0,j=1;
        while(i<data.length){
            if(j<data.length){
                if(data[index]>data[j]){
                    index=j;
                }
                j++;
            }
            i++;
        }
        return data[index];

    }
    public static boolean inArray(int value,int[] array){
        for(int i:array){
            if(value==i){
                return true;
            }
        }
        return false;
    }

    public static int[] arrayDifference(int[] data,int[]difference){
        int counter=0;
        for(int i=0;i<data.length;i++){
            if(ArrayHelper.inArray(data[i],difference)){
                counter++;
            }
        }

        int[] finalData=new int[data.length-counter];
        int index=0;
        for(int i=0;i<data.length;i++){
            
            if(!ArrayHelper.inArray(data[i],difference)){
                finalData[index]=data[i];
                index++;
            }
        }
        return finalData;
    }
}
