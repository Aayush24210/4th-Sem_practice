# Write a Python program to reverse the order of words in a given string without reversing the individual words.
	# Input: "Hello World from Python"

def reverse_words(s):
    x = s.split()
    x.reverse()
    return ' '.join(x)
string = "Hello World from Python"
reversed_string = reverse_words(string)
print(reversed_string)
# output: "Python from World Hello"
