// Definir las bases del ADN
const basesADN = ['A', 'C', 'G', 'T'];

// Crear la colección miADN
let miADN = [];

// Generar 24 bases aleatorias
for (let i = 0; i < 24; i++) {
  let baseAleatoria = basesADN[Math.floor(Math.random() * basesADN.length)];
  miADN.push(baseAleatoria);
}

console.log(miADN);
