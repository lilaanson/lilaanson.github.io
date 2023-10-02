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
    def vector_add_test(self):
        A = [10,11,12]
        B = [3,6,9]
        self.assertEqual(vector_add(A,B), [13, 17, 21])

    def vector_add_test2(self):
        A = [1,2,3]
        B = [1,2,3]
        self.assertEqual(vector_add(A,B), [1, 4, 6])

if __name__ == '__main__':
    unittest.main()
