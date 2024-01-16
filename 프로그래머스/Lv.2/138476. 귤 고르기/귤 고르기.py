def solution(k, tangerine):
    ans = 0
    max_tangerine = max(tangerine)
    size = [0] * (max_tangerine + 1)
    for i in tangerine:
        size[i-1] += 1
    size.sort(reverse=True)
    for j in size:
        if k <= 0:
            break
        k -= j
        ans += 1
    return ans
