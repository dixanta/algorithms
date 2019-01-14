import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

import javax.imageio.ImageIO;

public class ArrayToImage {
    public static void main(String[] args) {
        int width=800,height=600;
        int[] pixels = new int[width * height];
        
        for (int j = 0; j < height; j++) {
            for (int i = 0; i < width; i++) {
                if (i == j) {
                    pixels[j * width + i] = Color.GREEN.getRGB();
                } else {
                    pixels[j * width + i] = Color.BLUE.getRGB();
                }
            }
        }

        BufferedImage pixelImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        pixelImage.setRGB(0, 0, width, height, pixels, 0, width);
        
        try{
        File outputfile = new File("image.jpg");
        ImageIO.write(pixelImage, "jpg", outputfile);
        }catch(IOException ioe){
            System.out.println(ioe.getMessage());
        }
    }
}
