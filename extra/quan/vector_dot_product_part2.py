import math
import unittest
def geodotp(A,B):
    # x.y = ||x|| ||y|| cos(theta)
    x_y = algdotp(A,B)
    n_A = norm(A)
    n_B = norm(B)
    angle = x_y/(n_A*n_B)

    yield n_A
    yield n_B
    yield angle


def algdotp(A,B):
    sum = 0
    for i in range (len(A)):
        sum += A[i]*B[i]
    return sum

def norm(A):
    sum = 0
    for i in A:
        sum += i**2

    return(math.sqrt(sum))

class TestFunction(unittest.TestCase):
    def test_geodotp1(self):
        A = [1,2]
        B = [3,4]
        self.assertEqual(next(geodotp(A,B)), 2.23606797749979)

    def test_geodotp2(self):
        A = [-1,5]
        B = [2,-9]
        self.assertEqual(next(geodotp(A,B)), 5.0990195135927845)

    def test_algdotp1(self):
        A = [1,3]
        B = [8,4]
        self.assertEqual(algdotp(A,B), 20)

    def test_algdotp2(self):
        A = [-4,5]
        B = [3,-7]
        self.assertEqual(algdotp(A,B), -47)
    
    def test_norm1(self):
        A = [3,-3]
        self.assertEqual(norm(A), 4.242640687119285)

    def test_norm2(self):
        A = [8,-8]
        self.assertEqual(norm(A), 11.313708498984761)

if __name__ == '__main__':
    unittest.main()

    