# Write a Python program to find all unique characters in a given string.
# Input: "programming"
# Output: ['p', 'o', 'r', 'g', 'a', 'm', 'i', 'n']
def find_unique_characters(s):
    unique_characters = []
    for char in s:
        if char not in unique_characters:
            unique_characters.append(char)
    return unique_characters
string = "programming"
result = find_unique_characters(string)
print(result)
# output: ['p', 'r', 'o', 'g', 'a', 'm', 'i', 'n']