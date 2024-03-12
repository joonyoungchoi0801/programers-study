function solution(arr, n) {
    
    let len = arr.length;
    if(len%2 !=0){
        for(let i in arr){
            if(i%2===0){
                arr[i]+=n;
            }
        }
    }
    else{
        for(let i in arr){
            if(i%2!==0){
                arr[i]+=n;
            }
        }
    }

    return arr;
}