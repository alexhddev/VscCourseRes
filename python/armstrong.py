"""Python program to check if the number is an Armstrong number or not"""

# take input from the user
num = int(input("Enter a number: "))

def is_armstrong(arg: int): 
    """Function printing python version."""
    sumz = 0
    # find the sum of the cube of each digit
    temp = arg
    while temp > 0:
        digit = temp % 10
        sumz += digit**3
        temp //= 10

    # display the result
    if arg == sumz:
        print(arg, "is an Armstrong number")
        return True
    print(arg, "is not an Armstrong number")
    return False

is_armstrong(num)
