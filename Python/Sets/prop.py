# properties of sets
# 1. sets are unordered
# 2. sets are unindexed
# 3. sets are mutable
# 4. sets do not allow duplicate values
# 5. sets are defined by curly braces {}
# 6. sets can contain different data types
# 7. sets are iterable
# 8. sets are not hashable
# 9. sets are not subscriptable
# 10. sets stores only immutable data types(we cannot store list, dict, set in set)

set1 = {1, 2, 3, 4, 5}
print(set1)

# clear method
set1.clear()
print(set1)

# copy method
set2 = {1, 2, 3, 4, 5}
set3 = set2.copy()
print(set3)

# difference method
set4 = {1, 2, 3, 4, 5}
set5 = {4, 5, 6, 7, 8}
print(set4.difference(set5))  # {1, 2, 3}
print(set5.difference(set4))  # {6, 7, 8}

# delete method
set6 = {1, 2, 3, 4, 5}
del set6    

# discard method
set7 = {1, 2, 3, 4, 5}
set7.discard(3)
print(set7)  # {1, 2, 4, 5}


