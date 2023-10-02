import unittest
import math

def vector_add(a,b):
    c = []
    for i in range(len(a)):
        c.append(a[i]+b[i])
    return(c)

def vector_sum(a):
    total = 0
    for i in a:
        total += i
    return(total)

def norm(a):
    step_one = 0
    for i in a:
        step_one += i * i
    e_norm = math.sqrt(step_one)
    return(e_norm)



class TestFunction(unittest.TestCase):
    pass

if __name__ == '__main__':
    unittest.main()
