
# Q1. Write a Python program to check if a given string is a valid email address.
def is_valid_email(email):
    if '@' in email and '.' in email:
        return True
    return False    
email = "user@example.com"
if is_valid_email(email):
    print("The email address is valid.")
else:
    print("The email address is invalid.")