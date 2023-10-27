import java.util.Arrays;
class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
        int[] answer = {};
        answer = new int[photo.length];
        for(int i=0; i<photo.length; i++){
            int sum = 0;
            for(int j=0; j<photo[i].length; j++){
                int idx = Arrays.asList(name).indexOf(photo[i][j]);
                if(idx == -1) sum += 0;
                else sum += yearning[idx];
            }
            answer[i] = sum;
        }
        return answer;
    }
}