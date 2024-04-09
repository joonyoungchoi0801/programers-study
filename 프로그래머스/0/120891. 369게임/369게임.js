function solution(order) {
    var answer = 0;
    for(let i of order.toString()){
        console.log(i);
        if(i == 3 || i ==6||i==9){
            answer++;
        }
    }
    return answer;
}