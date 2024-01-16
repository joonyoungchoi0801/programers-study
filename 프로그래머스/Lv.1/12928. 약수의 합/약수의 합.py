def findprime(num):
    sum = 0
    prime_num = []
    for i in range(1,num+1):
        if num % i == 0:
            prime_num.append(i)
    
    for j in prime_num:
        sum+=j
    return sum





def solution(n):
    answer = findprime(n)
    return answer