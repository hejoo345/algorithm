import java.io.*;
import java.util.*;

public class Main {
    static int[][] arr;
    static boolean[][] visited;
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, 1, -1};
    static int n;
    static int m;
    static int max;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        n = Integer.parseInt(st.nextToken());
        m = Integer.parseInt(st.nextToken());
        arr = new int[n][m];
        visited = new boolean[n][m];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < m; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                visited[i][j] = true;
                dfs(i, j, arr[i][j], 1);
                visited[i][j] = false;
            }
        }
        System.out.println(max);
    }

    public static void dfs(int row, int col, int sum, int cnt) {
        if (cnt == 4) {
            max = Math.max(max, sum);
            return;
        }
        for (int i = 0; i < 4; i++) {
            int nextX = row + dx[i];
            int nextY = col + dy[i];
            if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;
            if (!visited[nextX][nextY]) {
                visited[nextX][nextY] = true;
                dfs(nextX, nextY, sum + arr[nextX][nextY], cnt + 1);
                visited[nextX][nextY] = false;

                if (cnt == 2) {
                    visited[nextX][nextY] = true;
                    dfs(row, col, sum + arr[nextX][nextY], cnt + 1);
                    visited[nextX][nextY] = false;
                }
            }
        }
    }
}