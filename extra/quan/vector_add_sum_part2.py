import unittest

def vector_add(a,b):
    c = []
    for i in range(len(a)):
        c.append(a[i]+b[i])
    return(c)