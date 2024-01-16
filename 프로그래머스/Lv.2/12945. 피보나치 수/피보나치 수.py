fibo = [1,1]
def countfibo(n):
    for i in range (0, n-2):
        fibo.append(fibo[i]+fibo[i+1])
        
def solution(n):
    countfibo(n)
    answer = fibo[n-1] % 1234567
    return answer