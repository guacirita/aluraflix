var listaFilmes = [
  "https://br.web.img3.acsta.net/c_310_420/pictures/20/12/23/17/52/3235005.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/14/11/05/19/26/231644.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/94/57/74/20339839.jpg",
  "https://agenciadenoticias.uniceub.br/wp-content/uploads/2022/09/amr_cartaz.teaser_online_1080x1350px_BREVE.jpg",
  "https://www.joaobracks.com.br/wp-content/uploads/2023/10/169230678964de8d655d2e4_1692306789_3x4_md.jpg",
  "https://br.web.img3.acsta.net/c_310_420/pictures/16/12/21/20/45/071675.jpg",
  "https://images-americanas.b2w.io/produtos/5041635651/imagens/dvd-what-happened-miss-simone/5041635651_1_large.jpg",
  "https://mulheres.apmppr.org.br/storage/women-movies/2018.12.20-11.23.43.jpg",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/07/53/20391069.jpg",
  "https://institutodecinema.com.br/img/images_(2).jpeg"
];

var nomeDosFilmes = [
  "Emicida: AmarElo - É Tudo Pra Ontem",
  "Pantera Negra",
  "Ó paí, Ó",
  "A Cor Púrpura",
  "A Mulher Rei",
  "Mussum, o Filmis",
  "Estrelas Além do Tempo",
  "What Happened, Miss Simone?",
  "Histórias Cruzadas",
  "Django",
  "Corra!",
];

document.write('<div class="container_todosFilmes">')

/** Usando push */

listaFilmes.push("https://hitsite.com.br/wp-content/uploads/2023/10/10-O-Pai-O-2-Divulgacao.jpg");
nomeDosFilmes.push("Ó paí, Ó 2");

/**Usando for */
// for (let i = 0; i < listaFilmes.length; i++) {
//   document.write("<img src=" + listaFilmes[i] + ">");

// }

/**Usando while */
var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) || (listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">');
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeDosFilmes[i] +'</p>'); /** colocando titulos embaixo da imagem */ 
        document.write('</div>');
    }else{
        document.write('<p> A imagem ' + i + ' não foi lida pois não é um arquivo do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>');









