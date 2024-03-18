function solution(a, b, c, d) {
    var answer = 1;
    let cnt = Array(7).fill(0);
    let arr = Array(5).fill(0);
    cnt[a]++;
    cnt[b]++;
    cnt[c]++;
    cnt[d]++;
    console.log(cnt);
    let one = 0;
    let min = 7;
    for(let i = 1; i<=6;i++){
        if(cnt[i]==4){
            answer = 1111*i
            break;
        }
        if(cnt[i]==3){
            for(let j =1;j<=6;j++){
                if(cnt[j]==1){
                    answer = Math.pow(10*i+j,2);
                }
            }
            break;
        }
        if(cnt[i]==2){
            for(let j =1;j<=6;j++){
                if(i!==j&&cnt[j]==2){
                    answer = (i+j)*Math.abs(i-j);
                }
                if(cnt[j]==1){
                    answer *= j;
                }
            }
            break;
        }
        if(cnt[i]==1){
            one++;
            if(one ==4){
                for(let j =1;j<=6;j++){
                if(cnt[j]==1){
                    answer = j;
                    break;
                }
            }
            }
        }
    }
    return answer;
}