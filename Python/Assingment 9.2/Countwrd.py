# Write a Python program to count the number of words in a given string that start with a specific letter which was taken as a input.
# Input: "This is a test string for testing", 't'
# Output: 3
def count_words_starting_with_letter(s, letter):
    words = s.split()
    count = 0
    for word in words:
        if word.lower().startswith(letter.lower()):
            count += 1
    return count

string = "This is a test string for testing"
letter = 't'
result = count_words_starting_with_letter(string, letter)
print(result)
