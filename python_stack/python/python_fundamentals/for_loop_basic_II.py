# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(list):
    for x in range(0,len(list)):
        if list[x] < 0:
            list[x] = "big"
    return list
test = biggie_size([1,0,-1,7,-5,-1])
print(test)

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. 
# (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(list):
    count = 0
    for x in range(0,len(list)):
        if list[x] > 0:
            count += 1
    list[len(list) - 1] = count
    return list
test = count_positives([1,-1,0,2,-3,-4])
print(test)

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7
def sum_total(list):
    sum = 0
    for x in range(0,len(list)):
        sum += list[x]
    return sum
test = sum_total([1,2,3,4,5])
print(test)

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5
def find_average(list):
    sum = 0
    for x in range(0,len(list)):
        sum += list[x]
    return sum / len(list)
test = find_average([1,2,3,4])
print(test)

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0
def list_length(list):
    return len(list)
test1 = list_length([])
test2 = list_length([1,2,3,4,7])
test3 = list_length([1.4,2])
print(test1)
print(test2)
print(test3)

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False
def find_minimum(list):
    if len(list) == 0:
        return False
    min = list[0]
    for x in range(0,len(list)):
        if list[x] < min:
            min = list[x]
    return min
test1 = find_minimum([4,5,3,4,10])
test2 = find_minimum([])
print(test1)
print(test2)

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False
def find_maximum(list):
    if len(list) == 0:
        return False
    max = list[0]
    for x in range(0,len(list)):
        if list[x] > max:
            max = list[x]
    return max
test1 = find_maximum([0,-4,7,20,19,7])
test2 = find_maximum([])
print(test1)
print(test2)

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }
def ultimate_analysis(list):
    max = list[0]
    min = list[0]
    sum = 0
    l = len(list)
    for x in range(0,len(list)):
        if list[x] > max:
            max = list[x]
        if list[x] < min:
            min = list[x]
        sum += list[x]
    avg = sum / len(list)
    new_dictionary = {'sumTotal': sum, 'average': avg, 'minimum': min, 'maximum': max, 'length': l}
    return new_dictionary
test = ultimate_analysis([1,0,3,5,-3,10])
print(test)



# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. 
# (This challenge is known to appear during basic technical interviews.) Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]
def reverse_list(list):
    l = len(list)
    for x in range(0,l // 2,1):
        swap = list[x]
        list[x] = list[len(list) - 1 - x]
        list[len(list) - 1 - x] = swap
    return list
initial = [37,2,1,-9]
test = reverse_list(initial)
print(test)