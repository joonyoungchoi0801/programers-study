function solution(binomial) {
    var answer = 0;
    if(binomial.includes('+')){
        let a = binomial.split('+').map(Number);
        answer = a[0]+a[1];
    }
    else if(binomial.includes('-')){
        let a = binomial.split('-').map(Number);
        answer = a[0]-a[1];
    }
    else if(binomial.includes('*')){
        let a = binomial.split('*').map(Number);
        answer = a[0]*a[1];
    }

    return answer;
}