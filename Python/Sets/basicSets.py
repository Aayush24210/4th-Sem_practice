
# set is unordered 

# dt = {1:23,45:2,"hello":5.6,"hi":55,1:45,1:65}
# print(dt)/

# print(dt.keys())


# x = 3,4,5   //tuplee
# print(x)

# for k in dt.keys:


# # write a prgram which will print sum of all the keys whoes values are the factor of 12

# dt={1:2,2:3,3:4,6:12,17:18,18:12}
# # sum = dt.keys()
# sum = 0 
# for k in dt.keys():
#     if 12 % dt[k]== 0 :
#         sum = sum + k
# print(sum)




# keys=list(dt.keys)
# print(keys)
# print(sum)

dt={1:2,2:3,3:4,6:12,17:18,18:12} 
print(dt.get(2))
# dt[21]

# del dt[3]  To delete

# print(dt.pop(3))  returns 

# dt.clear()

# x = dt.popitem()
# print(x)

# dt.update

subjects = {}.fromkeys{"maths","physics","Hindi":0}

squares = {2:4,3:9,4:16,5:25}
s = squares.copy  #shallow copy
s[2]=6
print(s)
print(squares)




s = {2:4,3:9,4:16,5:25}
dt = {k:v*2 for k,v in s.items() if v%2==0}
dt1={k:v*3 if k%2 ==0 else v for k,v in s.items() }
print(dt1)
