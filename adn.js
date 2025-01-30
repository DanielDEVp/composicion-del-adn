import random

bases = ['A', 'C', 'G', 'T']
miADN = [random.choice(bases) for _ in range(24)]
print(miADN)
