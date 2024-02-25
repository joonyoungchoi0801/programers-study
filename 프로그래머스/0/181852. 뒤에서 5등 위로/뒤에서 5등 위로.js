function solution(num_list) {
    var answer = [];
    num_list.sort((a,b)=> {return a-b;})
    num_list.splice(0,5)

    return num_list;
}