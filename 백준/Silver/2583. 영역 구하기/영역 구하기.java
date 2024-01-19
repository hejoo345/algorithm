import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.StringTokenizer;

public class Main {
    static int m; // y 좌표
    static int n; // x 좌표
    static int k;
    static int[][] arr;
    static int[] dx = {-1, 1, 0, 0};
    static int[] dy = {0, 0, -1, 1};
    static int area; // 정답 사각형 넓이
    static ArrayList<Integer> result;

    public static void main(String[] args) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        m = Integer.parseInt(st.nextToken()); // 5
        n = Integer.parseInt(st.nextToken()); // 7
        k = Integer.parseInt(st.nextToken()); // 3

        arr = new int[m][n];
        result = new ArrayList<>();
        for (int t = 0; t < k; t++) {
            st = new StringTokenizer(br.readLine());
            int x1 = Integer.parseInt(st.nextToken()); // 0
            int y1 = Integer.parseInt(st.nextToken()); // 2
            int x2 = Integer.parseInt(st.nextToken()); // 4
            int y2 = Integer.parseInt(st.nextToken()); // 4

            for (int i = x1; i < x2; i++) {
                for (int j = y1; j < y2; j++) {
                    arr[j][i] = 1;
                }
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (arr[i][j] == 0) {
                    area = 1;
                    dfs(i, j);
                    result.add(area);
                }
            }
        }

//        for (int i = 0; i < m; i++) {
//            for (int j = 0; j < n; j++) {
//                System.out.print(arr[i][j]);
//            }
//            System.out.println();
//        }
        result.sort(Comparator.naturalOrder());
        sb.append(result.size()).append("\n");
        for (int i : result) {
            sb.append(i + " ");
        }
        System.out.println(sb);
    }

    static void dfs(int x, int y) {
        arr[x][y] = 1;

        for (int i = 0; i < 4; i++) {
            int nextX = x + dx[i];
            int nextY = y + dy[i];
            if (nextX >= 0 && nextY >= 0 && nextX < m && nextY < n) {
                if (arr[nextX][nextY] == 0) {
                    area++;
                    dfs(nextX, nextY);
                }
            }
        }
    }
}