# Q1. Write a Python program to create two sets, A and B, and find the elements that are common to both sets. 

A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
common_elements = A.intersection(B)
print("Common elements in sets A and B:", common_elements)

# Write a Python program to create two sets, X and Y, and find the elements that are unique to each set (not present in both). 
# X = {10, 20, 30, 40} 
# Y = {30, 40, 50, 60}
X = {10, 20, 30, 40}
Y = {30, 40, 50, 60}
unique_to_X = X.difference(Y)
unique_to_Y = Y.difference(X)
print("Elements unique to set X:", unique_to_X)
print("Elements unique to set Y:", unique_to_Y)

