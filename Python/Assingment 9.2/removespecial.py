# Write a Python program to remove given special characters from a given string.
# Special characters include symbols like @, #, !.
# Input: "Hello@World!123"
# Output: "HelloWorld123"
def remove_special_characters(s):
    special_characters = '@#!'
    for char in special_characters:
        s = s.replace(char, '')
    return s
string = "Hello@World!123"
result = remove_special_characters(string)
print(result)
# output: "HelloWorld123"
    