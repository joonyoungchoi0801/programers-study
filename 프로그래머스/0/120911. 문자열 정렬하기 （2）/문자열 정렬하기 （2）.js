function solution(my_string) {
    var answer = '';
    for(let str of my_string){
        if(str !== str.toLowerCase()){
            answer += str.toLowerCase()
        }
        else{
            answer+=str;
        }
    }
    let arr = answer.split('');
    arr.sort();
    answer = arr.join('');
    return answer;
}