import java.io.File;
import java.io.IOException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.LineEvent;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;

public class main {

    static Runnable print = new Runnable() {
        public void run() {
            try {
                // Specify the path to the wav file
                File audioFile = new File("naruto.wav");

                // Create an AudioInputStream from the file
                AudioInputStream audioStream = AudioSystem.getAudioInputStream(audioFile);

                // Get an audio clip resource
                Clip audioClip = AudioSystem.getClip();

                // Open the audio clip with the audio stream
                audioClip.open(audioStream);

                // Play the audio clip
                audioClip.start();

            } catch (UnsupportedAudioFileException | IOException | LineUnavailableException e) {
                e.printStackTrace();
            }
        }
    };

    public static void main(String[] args) {
        ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();

        executorService.scheduleAtFixedRate(print, 0, 3, TimeUnit.SECONDS);
    }
}
