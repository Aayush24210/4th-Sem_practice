# Write a Python program to capitalize the first and last character of every word in a given string.
# Input: "hello world from python"
# Output: "HellO WorlD FroM PythoN"

def capitalize_first_and_last(s):
    words = s.split()
    capitalized_words = []
    for word in words:
        if len(word) > 1:
            capitalized_word = word[0].upper() + word[1:-1] + word[-1].upper()
        else:
            capitalized_word = word.upper()
        capitalized_words.append(capitalized_word)
    return ' '.join(capitalized_words)
string = "hello world from python"
result = capitalize_first_and_last(string)
print(result)
# output: "HellO WorlD FroM PythoN"