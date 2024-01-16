function solution(k, tangerine) {
    var ans = 0;
    var size = new Array(Math.max.apply(null, tangerine)).fill(0);
    for (let i = 0 ; i<tangerine.length;i++){
        size[tangerine[i]-1] +=1;
    }
    size.sort(function compare(a,b){
        return b-a;
    })
    for(let j = 0; j < size.length;j++){
        if(k<=0){
            break;
        } 
        k-= size[j];
        ans++;
    }

    return ans;
}