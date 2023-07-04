/*
Luta por diferença de peso


Problema
Você foi contratado pelo UFC, maior evento de artes maciais mistas (MMA) do mundo, para desenvolver um programa que os ajude a saber se uma luta entre dois lutadores pode ou não acontecer.

A única restrição para que uma luta aconteça é que os lutadores tenham uma diferença máxima de peso de 5 kg.

Entrada
A entrada do seu programa será composta por uma variável chamada pesos, do tipo array de number, que armazena, respectivamente, o peso do Lutador A e do Lutador B, ambos em quilogramas, sendo esses os lutadores analisados.

Saída
Você deverá retornar:

PODEM LUTAR: caso a diferença entre os pesos dos lutadores seja no máximo de 5 kg;
NAO PODEM LUTAR: caso a diferença entre os pesos dos lutadores seja maior que 5 kg.
Exemplo
Entrada
pesos = [50, 53]

Saída
PODEM LUTAR

Explicação
O Lutador A pesa 50 kg e o Lutador B pesa 53 kg. Como a diferença entre os pesos é de 3 kg, eles podem lutar.

Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
Você está esquecendo de trocar o console.log pelo return;
Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
*/

function verificarLuta(pesos) {
    let diferencaPeso = pesos[0] - pesos[1];
  
    if (diferencaPeso <= 5 && diferencaPeso >= -5) {
      return "PODEM LUTAR";
    } else {
      return "NAO PODEM LUTAR";
    }
  }
  
  let pesos = [50, 53];
  let resultado = verificarLuta(pesos);
  console.log(resultado);
  