function solution(dots) {
    var answer = 0;
    let dot1 = dots[0];
    let dot2 = dots[1];
    let dot3 = dots[2];
    let dot4 = dots[3];
    if((dot2[1]-dot1[1])/(dot2[0]-dot1[0]) === (dot3[1]-dot4[1])/(dot3[0]-dot4[0])){answer = 1;} 
    if((dot3[1]-dot1[1])/(dot3[0]-dot1[0]) === (dot2[1]-dot4[1])/(dot2[0]-dot4[0])){answer = 1;}                     if((dot4[1]-dot1[1])/(dot4[0]-dot1[0] )=== (dot2[1]-dot3[1])/(dot2[0]-dot3[0])){answer = 1;} 
    return answer;
}