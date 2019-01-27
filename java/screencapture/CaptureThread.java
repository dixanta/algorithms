import java.awt.Rectangle;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.File;
import java.util.Date;

import javax.imageio.ImageIO;

public class CaptureThread implements Runnable{
    private int counter;

    public CaptureThread(int counter){
        this.counter=counter;
    }
    @Override
    public void run() {
       try{
        
        Rectangle region = new Rectangle(Toolkit.getDefaultToolkit().getScreenSize());
        BufferedImage capturedImage = new Robot().createScreenCapture(region);

        // Save as PNG
        String fileName="capture/"+counter + "_capture.png" ;
        File imageFile = new File(fileName);
        ImageIO.write(capturedImage, "png", imageFile);
        System.out.println(fileName + " captured");
        
       }catch(Exception ex){
           System.out.println(ex.getMessage());
       }
    }
}
