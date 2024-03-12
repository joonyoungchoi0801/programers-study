function solution(my_string) {
    var answer = [];
    let word = my_string.split(" ");
    console.log(word);
    for (let str of word){
        if (str !==''){
            answer.push(str);
        }
    }
    return answer;
}