 //tipos - Declarando variáveis
let numero = 5436;
let texto = "Oi";
let vazio;

console.log("Numero:", numero);
console.log("Numero:", typeof numero);

console.log("Texto:", texto);
console.log("Texto:", typeof texto);

console.log("Verdade:", verdade);
console.log("Verdade:", typeof verdade);

console.log("Vazio:", vazio);
console.log("vazio:", typeof vazio);

//booleanos
let verdade = numero > 100; // true
let inverdade = numero < 10; // false
console.log("É maior?", numero > 5436);
console.log("E maior ou igual?", numero >= 5);
console.log("E menor?", numero < 10000);
console.log("E menor ou igual?", numero <= 5436);
console.log("E igual?", numero == 5436);
console.log("E diferente?", numero != 5436);

//Testando divisão = Um numero é divisivel por outro?
function solucao(numero1, numero2) {
        const resto = numero1 % numero2;
        const resposta = resto === 0;
        console.log(resposta);
        return resposta;
}
console.log ("Testando a solução entre 10 e 2");
solucao(10, 2); 

// Percorrendo uma lista
function somaArray(lista) {
        let sum = 0;
        for (let i = 0; i < lista.length; i++) { 
          sum += lista[i];
        }
        return sum;
      }
      