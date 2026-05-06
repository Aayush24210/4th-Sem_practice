# write a python to create dictionary named student grade with the following key values
student_grade ={"Alice":85,"Bob":90,"chalis":78}
print(student_grade)

#Q2> write a python program to acess and print the grade of "BOb " from the givvn dictionary

student_grade ={"Alice":85,"Bob":90,"chalis":78}
print(student_grade['Bob'])

#Q3> add a new student "David" with grade 92
student_grade['David'] = 92
print(student_grade)

# Q4> write a program to update update the grade of "Chalis" to 80 
student_grade ={"Alice":85,"Bob":90,"chalis":78,"David":92}
student_grade["chalis"]= 80
print(student_grade)

# Q5> write a program to delete the student david
del student_grade["David"]
print(student_grade)

# Q6> write a program to check the "Eve" is present or no

if "Eve " in student_grade:
    print("Eve is present in the dirictiory")
else:
    print("Eve is not present in the dirictiory")

# Q7> write a prgram to print all the students name in the given dirictiory
for student in student_grade:
    print(student)

# Q8> write a program to print all the students grade in the given directory
for grade in student_grade.values():
    print(grade)

# Q9> write a program to print all key values pairs in the given dictionary
for student,grade in student_grade.items():
    print(f"{student}:{grade}")
