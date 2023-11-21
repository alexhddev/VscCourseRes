"""Python program to check if the number is an Armstrong number or not"""


def is_armstrong(arg: int):
    """Armstrong number is a number that is equal to the sum of cubes of its digits.
    For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers"""
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
