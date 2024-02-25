function solution(my_string, is_suffix) {
    var answer = 0;
    let len = my_string.length;
    let suffix = my_string.slice(len-is_suffix.length,len-is_suffix.length+is_suffix.length)
    if(suffix===is_suffix) answer++;
    return answer;
}