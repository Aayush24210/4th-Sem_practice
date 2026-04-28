# Write a Python program to remove all occurrences of a given substring from a string.
def remove_substring(s, substring):
    return s.replace(substring, '')

string = "Hello, World! Hello, everyone!"
substring_to_remove = "Hello"
result = remove_substring(string, substring_to_remove)
print(result)
# output: ", World! , everyone!"
