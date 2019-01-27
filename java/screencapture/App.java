/**
* Screen Capture Java Program
* Written By: Dixanta Bahadur Shrestha
* Creators Institute of Business & Technology, Nepal
**/
import java.awt.Color;
import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class App{
    public static void main(String[] args)throws Exception{
        System.out.println("Capturing start");
        int i=0;
        File file=new File("capture");
        if(!file.exists() || !file.isDirectory()){
            file.mkdir();
        }
        while(true){
            i++;
            Thread thread=new Thread(new CaptureThread(i));
            thread.start();
            Thread.sleep(5000);
            
            
        }
    }
}
