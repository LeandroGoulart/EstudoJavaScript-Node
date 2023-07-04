/*
Acesso ao chefão
Difícil
200 pontos

Problema
Como desenvolvedor sênior da Cubos Game, empresa da Cubos Academy destinada a fazer jogos eletrônicos para computadores, você ficou responsável por implementar a lógica que mostre ao jogador do "Enfrentando Bugs", novo jogo da empresa, se ele pode ou não entrar na sala do chefão da fase em que ele se encontra no jogo.

Para ter o direito de enfrentar o chefão, o jogador deve ter coletado três itens específicos ao longo da fase, que variam de chefão para chefão.

Entrada
A entrada do seu programa será composta por quatro variáveis:

itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
Saída
Você deve retornar:

PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
Exemplo
Entrada
itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

itemNecessario1 = "machado"

itemNecessario2 = "espada"

itemNecessario3 = "sapato"

Saída
NAO PODE ENFRENTAR

Explicação
Apesar do jogador ter conseguido coletar dois dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.

Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
Você está esquecendo de trocar o console.log pelo return;
Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
*/

function verificarAcessoChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // Verifica se o jogador possui os três itens necessários
    if (itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) && itensColetados.includes(itemNecessario3)) {
      return "PODE ENFRENTAR";
    } else {
      return "NAO PODE ENFRENTAR";
    }
  }

//   // Language: javascript  outra solução


function verificarAcessoChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // Verifica se todos os itens necessários estão presentes nos itens coletados
    const possuiItensNecessarios = [itemNecessario1, itemNecessario2, itemNecessario3].every(item => itensColetados.includes(item));
  
    // Retorna o resultado baseado na verificação
    if (possuiItensNecessarios) {
      return "PODE ENFRENTAR";
    } else {
      return "NAO PODE ENFRENTAR";
    }
  }
  
  /* Exemplo de uso
  let itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
  let itemNecessario1 = "machado";
  let itemNecessario2 = "espada";
  let itemNecessario3 = "sapato";
  
  let resultado = verificarAcessoChefao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
  console.log(resultado);
  */