//* Lista filmes do usuário 
function adicionarFilme() {
  let filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listaFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
    alert("Endereço de filme inválido");
  }

  document.getElementById("filme").value = "";
}

function listaFilmesNaTela(filmeFavorito) {
  let elementoFilmeFavorito = `<img src=${filmeFavorito}>`;
  let elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}

//* Minha lista de filmes 
let minhaLista = ['https://ingresso-a.akamaihd.net/img/cinema/cartaz/9490-cartaz.jpg', 'https://media.fstatic.com/kD3TgwaTlYvkiEdGZfZEViqf-_I=/210x312/smart/media/movies/covers/2017/03/Clube_da_Luta.jpg', 'https://media.fstatic.com/JkVn_PvpJ1Hx57YrbUp_izBvqYE=/210x312/smart/media/movies/covers/2014/01/coracao-de-cavaleiro_t352.jpg', 'https://media.fstatic.com/TadC07HMQxF7CPIeYI0w36iClIc=/210x312/smart/media/movies/covers/2012/02/4adc808b5472252cbef1dc860e9d8051.jpg', 'https://media.fstatic.com/YxYO_N6-gDXMfKP-Qf3geG0o7_U=/210x312/smart/media/movies/covers/2011/11/11d92332d55ad3883afbdd3a891ca3a8.jpg', 'https://media.fstatic.com/tkA-Emn3Zss8kDI385Fk83apLwA=/210x312/smart/media/movies/covers/2011/12/48dec2e6e554f2c7f755bbd72aaacaba.jpg', 'https://media.fstatic.com/ekRlYhrIUpLnieNvBiTIHsu6geE=/210x312/smart/media/movies/covers/2013/02/a3663511b19ca10b9ea8d105eca28efc.jpg', 'https://media.fstatic.com/12DOe4RViNfQsk6D3JBE5BuYD3A=/210x312/smart/media/movies/covers/2012/02/b2fb8d30f2207eec304c24cfbd133793.jpg', 'https://media.fstatic.com/1DPRw_EWGG9ERwGBjUzXVUeJcTk=/210x312/smart/media/movies/covers/2012/09/231d79f2613efa49dbe2b145a5abd701.jpg', 'https://media.fstatic.com/KWfWmJXjzCLtAuPHywqcCVTe8gk=/210x312/smart/media/movies/covers/2011/06/46aaffb51cc720947acd05d0c19dc638.jpg', 'https://media.fstatic.com/sCQ2qT2vllBzxB9U2nffkqfZYGY=/210x312/smart/media/movies/covers/2011/07/0fcedd6cd0ff6feacf207661ad5c7cbc.jpg', 'https://media.fstatic.com/5ce_5Sf7qzOGEysds0O6X6XUhxw=/210x312/smart/media/movies/covers/2011/09/ad365b1e62872f2a9460048f5ddb2905.jpg']

for (let i = 0; i < minhaLista.length; i++) {
let meusFilmes = `<img src=${minhaLista[i]}>`;
let listaMeusFilmes = document.getElementById('minha-lista');
listaMeusFilmes.innerHTML += meusFilmes;
}

