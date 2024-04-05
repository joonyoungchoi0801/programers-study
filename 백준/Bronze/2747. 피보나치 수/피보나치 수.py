def fibo(prev1 , prev2):
    return prev1 + prev2

n = int(input())
rec = []

rec.append(0)
rec.append(1)
i = 1
while i<n :
    ans = fibo(rec[i-1],rec[i])
    rec.append(ans)
    i += 1

print(rec[n])

