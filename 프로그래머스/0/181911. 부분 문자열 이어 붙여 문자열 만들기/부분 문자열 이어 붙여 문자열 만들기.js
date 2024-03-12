function solution(my_strings, parts) {
    var answer = '';
    let i = 0;
    for(let str of my_strings){
        answer+= str.slice(parts[i][0],parts[i][1]+1);
        i++;
    }

    return answer;
}