/*
Presa ou predador
Problema
Em uma reportagem de 2016, a revista Veja cita as principais características que indicam se um animal é presa ou predador. Uma delas, segundo a revista, é que as presas costumam ter os olhos nos lados da cabeça, o que oferece um amplo ângulo de visão.

Martin Banks, professor de óptica da Universidade de Berkeley, diz o seguinte:

“A primeira necessidade desses animais (presas) é detectar predadores. Por isso, desenvolveram uma visão panorâmica com poucos pontos cegos”.

Você foi contratado pelo grupo de pesquisadores que desenvolveram essa pesquisa para criar um programa que diga se um animal é presa ou predador.

Entrada
A entrada do seu programa é composta de uma variável do tipo booleana chamada olhosNasLaterais, que indica se o animal analisado tem ou não olhos nas laterais da cabeça. O valor de true quer dizer que o animal tem olhos nas laterais e false que não tem.

Saída
Seu programa deve retornar:

PRESA: se o animal tiver olhos nas laterais da cabeça;

PREDADOR: se não tiver olhos nas laterais da cabeça.

Exemplo
Entrada
olhosNasLaterais = true

Saída
PRESA

Explicação
O animal possui olhos nas laterais da cabeça e, portanto, é uma presa.

Veja os três principais erros que você pode está cometendo ao passar seu código para a nossa plataforma:
Você está esquecendo de trocar o console.log pelo return;
Você não está retornando o que é pedido. Lembre-se que a mensagem a ser retornada tem que ser exatamente a solicitada no exercício, sem espaços em branco a mais e com as letras maiúsculas. Se a questão estiver pedindo, por exemplo, para retornar um número, não retorne nenhuma mensagem antes, retorne APENAS o número;
*/
function identificarAnimal(olhosNasLaterais) {
    if (olhosNasLaterais) {
      return "PRESA";
    } else {
      return "PREDADOR";
    }
  }
  const olhosNasLaterais = true;
  const tipoAnimal = identificarAnimal(olhosNasLaterais);
  console.log(tipoAnimal);
    