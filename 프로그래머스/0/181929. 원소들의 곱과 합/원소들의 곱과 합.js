function solution(num_list) {
    var answer = 0;
    let a = 0;
    let b = 1;
    for(let num of num_list){
        a +=num;
        b *= num;
    }
    answer = (a*a > b) ? 1 : 0
    return answer;
}