def solution(s):
    answer = 0  
    start, end = 0, 0  
    for i in range(len(s)):
        if start == end: 
            answer += 1
            x = s[i]
            end, start = 0, 0
            
        if s[i] == x:
            start += 1
        else:
            end += 1
            
    return answer