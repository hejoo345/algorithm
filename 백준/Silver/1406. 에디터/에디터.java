import java.io.*;
import java.util.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        String str = br.readLine();
        LinkedList<Character> list = new LinkedList<>();
        for (int i = 0; i < str.length(); i++) {
            list.add(str.charAt(i));
        }

        ListIterator<Character> iter = list.listIterator();
        while(iter.hasNext()) { // 커서를 맨뒤로 이동
            iter.next();
        }

        int m = Integer.parseInt(br.readLine());
        for (int i = 0; i < m; i++) {
            String inp = br.readLine();
            char op = inp.charAt(0);
            switch (op) {
                case 'L':
                    if (iter.hasPrevious()) {
                        iter.previous();
                    }
                    break;
                case 'D':
                    if (iter.hasNext()) {
                        iter.next();
                    }
                    break;
                case 'B':
                    if (iter.hasPrevious()) { // remove()는 next()나 previous()에 의해 반환된 가장 마지막 요소를 리스트에서 제거
                        iter.previous();
                        iter.remove();
                    }
                    break;
                case 'P':
                    char c = inp.charAt(2);
                    iter.add(c);
                    break;
                default:
                    break;
            }
        }
        for(char c: list) {
            bw.write(c);
        }
        bw.flush();
        bw.close();
    }
}