function solution(num_list) {
    var answer = num_list;
    if(num_list[num_list.length-2]<num_list[num_list.length-1]){
        num_list.push(num_list[num_list.length-1]-num_list[num_list.length-2])
    }
    else{
        num_list.push(num_list[num_list.length-1]*2);
    }
    return answer;
}