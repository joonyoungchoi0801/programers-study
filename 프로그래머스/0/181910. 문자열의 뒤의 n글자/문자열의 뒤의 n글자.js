function solution(my_string, n) {
    var answer = '';
    let len =  my_string.length;
    answer = my_string.slice(len-n);
    return answer;
}