class Solution:

def str_to_int(self, num):

d = {'0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7': 7, '8': 8, '9':9}
res = 0
for i,n_i in enumerate(num[::-1]):
res += d[n_i]*10**i

return res

def multiply(self, num1, num2):

num1 = self.str_to_int(num1)
num2 = self.str_to_int(num2)
ans = num1*num2

return str(ans)