import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class main {

    static Runnable print = new Runnable() {
        public void run() {
            System.out.println("hello");
        }
    };

    public static void main(String[] args) {
        ScheduledExecutorService executorService = Executors.newSingleThreadScheduledExecutor();

        executorService.scheduleAtFixedRate(print, 0, 3, TimeUnit.SECONDS);
    }
}
