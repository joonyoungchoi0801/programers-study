function solution(num_list) {
    var answer = 0;
    let odd = '';
    let even = '';
    for (let num of num_list){
        if(num%2 == 0){
            even += num.toString();
        }
        else{
            odd += num.toString()
        }
    }
    answer = Number(even)+Number(odd);
    return answer;
}