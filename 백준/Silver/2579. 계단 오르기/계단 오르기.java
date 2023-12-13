import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine()); // 계단의 개수
        int[] arr = new int[301];
        int[] dp = new int[301];
        for (int i = 1; i <= n; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }
        
        dp[1] = arr[1];
        dp[2] = arr[1] + arr[2];
        dp[3] = Math.max(arr[1], arr[2]) + arr[3];
        for (int i = 4; i <= n; i++) {
            dp[i] = Math.max(dp[i - 2], arr[i - 1] + dp[i - 3]) + arr[i];
        }
        System.out.println(dp[n]);
    }
}