# Write a Python program that takes a string and a character as input and returns a list of indices where the character occurs in the string.
# Input: "programming", 'm'
# Output: [6, 7]
def find_character_indices(s, char):
    indices = []
    for i in range(len(s)):
        if s[i] == char:
            indices.append(i)
    return indices


string = "programming"
character = 'm'
result = find_character_indices(string, character)
print(result)
