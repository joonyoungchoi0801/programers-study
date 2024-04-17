function solution(order) {
    var answer = 0;
    for(let a of order){
        if(americano.includes(a)){
            answer+=4500;
        }
        else{
            answer+=5000;
        }
    }
    return answer;
}
const americano = ["iceamericano", "americanoice","hotamericano", "americanohot","americano","anything"];
// const latte = ["cafelatte","icecafelatte", "cafelatteice","hotcafelatte", "cafelattehot"]