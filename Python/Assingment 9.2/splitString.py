# Write a Python program to split a string into a list of words and then join them back into a single string with a hyphen - as a separator.
# Input: "Python is awesome"
# Output: "Python-is-awesome"

def split_and_join_string(s):
    words = s.split()
    joined_string = '-'.join(words)
    return joined_string    
string = "Python is awesome"
result = split_and_join_string(string)
print(result)
# output: "Python-is-awesome"