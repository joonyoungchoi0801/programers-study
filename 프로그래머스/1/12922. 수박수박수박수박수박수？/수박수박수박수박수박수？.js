function solution(n) {
    var answer = '';
    let wm = '수박';
    let x = Math.floor(n/2);
    if(n%2===0){
        answer = wm.repeat(x);
    }
    else{
        answer=wm.repeat(x);
        answer+='수'
    }
    return answer;
}