#!/usr/bin/python3
""" making changes"""


def makeChange(coins, total):
    """function that return the change """
    if total <= 0:
        return 0

    if sum(coins) is None or total is None:
        return None

    current_sum = 0
    for num in coins:
        current_sum += num
        if current_sum > total:
            return -1
    return total - current_sum
