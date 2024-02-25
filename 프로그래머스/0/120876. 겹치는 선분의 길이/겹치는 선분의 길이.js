function solution(lines) {
    var answer = 0;
    let line1 = lines[0];
    let line2 = lines[1];
    let line3 = lines[2];
    let common = new Array(200).fill(0);
    for(let i = -100;i<=100;i++){
        if(i>=line1[0] && i<line1[1]){
            common[i+100]++;
        }
        if(i>=line2[0] && i<line2[1]){
            common[i+100]++;
        }
        if(i>=line3[0] && i<line3[1]){
            common[i+100]++;
        }
    }

    for (let i = 0; i < 200; i++) {
        if(common[i]>1){
            answer++;
        }
    }
    return answer;
}