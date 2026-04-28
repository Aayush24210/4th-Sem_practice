# # // basic questions of String lists
# # def(.upper()) # to convert the string into upper case
# # def(.lower()) # to convert the string into lower case
# # def(.capitalize()) # to convert the first letter of the string into upper case
# # def(.title()) # to convert the first letter of each word into upper case
# # def(.split()) # to split the string into a list of words
# # def(.join()) # to join a list of words into a string
# # def(.replace()) # to replace a substring with another substring in the string
# # def(.find()) # to find the index of the first occurrence of a substring in the string
# # def(.count()) # to count the number of occurrences of a substring in the string

# # complete reverse pattern in python
# # using slicing
# def reverse_string(s):
#     return s[::-1]
# string = "Hello, World!"
# reversed_string = reverse_string(string)
# print(reversed_string)

# # all type of revrse pattern in python
# # 1. Using slicing
# print("Using slicing:")
# def reverse_string_slicing(s):
#     return s[::-1]
# string = "Hello, World!"
# reversed_string = reverse_string_slicing(string)
# print(reversed_string)


# # 2. Using reversed() function
# print("Using reversed() function:")
# def reverse_string_reversed(s):
#     return ''.join(reversed(s))
# string = "Hello, World!"
# reversed_string = reverse_string_reversed(string)
# print(reversed_string)


# # 3. Using a loop
# print("Using a loop:")
# def reverse_string_loop(s):
#     reversed_str = ''
#     for char in s:
#         reversed_str = char + reversed_str
#     return reversed_str
# string = "Hello, World!"
# reversed_string = reverse_string_loop(string)
# print(reversed_string)


# # 4. Using recursion
# print("Using recursion:")
# def reverse_string_recursive(s):
#     if len(s) == 0:
#         return s
#     else:
#         return reverse_string_recursive(s[1:]) + s[0]
# string = "Hello, World!"
# reversed_string = reverse_string_recursive(string)
# print(reversed_string)


# # 5. Using stack
# print("Using stack:")
# def reverse_string_stack(s):
#     stack = []
#     for char in s:
#         stack.append(char)
#     reversed_str = ''
#     while stack:
#         reversed_str += stack.pop()
#     return reversed_str
# string = "Hello, World!"
# reversed_string = reverse_string_stack(string)
# print(reversed_string)


x = "Hello Lets play holi"
# output should be "Holi play lets heloo"
x = x.split()
# x = x.reverse()
x= [i[::-1]for i in x]
x= " ".join(x).capitalize()
print(x)




