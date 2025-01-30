# Proyecto de Generación de ADN

Este proyecto genera una secuencia de ADN aleatoria de 24 elementos, utilizando las cuatro bases que componen el ADN: Adenina (A), Citosina (C), Guanina (G) y Timina (T).

## Descripción

El ADN está compuesto por las siguientes cuatro bases:

- **Adenina (A)**
- **Citosina (C)**
- **Guanina (G)**
- **Timina (T)**

En conjunto, estas cuatro bases representan la composición genética única de la mayoría de los seres vivos. Este proyecto genera una colección llamada `miADN` con 24 elementos, generados aleatoriamente a partir de estas bases.

## Código

A continuación, el código Python utilizado para generar la secuencia de ADN:


import random

bases = ['A', 'C', 'G', 'T']
miADN = [random.choice(bases) for _ in range(24)]
print(miADN)
