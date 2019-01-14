/**
 * Directory Walk Recursive Algorithm
 * Written By: Dixanta Bahadur Shrestha
 * Creators Institute of Business & Technology
 * Software Engineering in Java
 */
import java.io.File;

public class DirectoryHelper{

    public static void walk(String path,String fileType){
        File file=new File(path);
        if(!file.isDirectory()){
            System.out.println("Invalid directory");
        }else{
            try{
            for(File f:file.listFiles()){
                String dir=f.getAbsolutePath();
                if(fileType!="" && dir.endsWith(fileType)){
                    System.out.println(dir);
                }else{
                    System.out.println(dir);
                }
                if(f.isDirectory()){
                    walk(dir,fileType);
                }
            }
            }catch(NullPointerException ne){

            }
        }
        
    }
}
