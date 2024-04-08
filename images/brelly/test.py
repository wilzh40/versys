def getDist(i, j, N):
    # one direction
    return min(abs(j-i), (abs((j-i+N) % N)))


assert (getDist(1, 9, 10) == 2)
assert (getDist(9, 1, 11) == 3)



def getMinCodeEntryTime(N: int, M: int, C: List[int]) -> int:
    # Write your code here
    for (i, c) in enumerate(C):
        print(i, c)
    def getDist(i, j, N):
        # one direction
        return min(abs(j-i), (abs((j-i+N) % N)))
        # other direction

    return 0


tc = 1
getMinCodeEntryTime(3, 3, [1, 2, 3])
getMinCodeEntryTime(10, 3, [1, 2, 3])
