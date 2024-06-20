#!/usr/bin/python3
""" making changes"""


def makeChange(coins, total):
    """function that return the change """
    if total <= 0:
        return 0

    if sum(coins) >= total:
        return -1

    if sum(coins) is None or total is None:
        return None

    return total - sum(coins)
