

"TimesCBloiro"={


"RedCanids":{

  Topo:"Robo",
  Caçador:"Nappon",
  Meio:"Tockers",
  Atirador:"brTT",
  Suporte:"Dioud",
  Reservas:"Brucer,Sacy e Yoda",
  Técnico:"Gevous"

},
"Paingaming":{
  Topo:"Mylon",
  Caçador:"SirT",
  Meio:"Kami",
  Atirador:"Matsukaze",
  Suporte:"Loop",
  Reservas:"Rakin e Tay",
  Técnico:"Mit"

},
"Cnbe-sports":{
  Topo:"Lep",
  Caçador:"Minerva",
  Meio:"Tinowns",
  Atirador:"Pbo",
  Suporte:"Woswos",
  Reservas:"Gafone e Yampi",
  Técnico:"Galfi"

},
"Kabume-sports":{
  Topo:"Zantins",
  Caçador:"Danagorn",
  Meio:"Vash",
  Atirador:"Thefoxz",
  Suporte:"Riyev",
  Reservas:"Nyu, Tomate e Titan",
  Técnico:"Neki"

},
"RemoBrave":{
  Topo:"Thulz",
  Caçador:"4lan",
  Meio:"Evrot",
  Atirador:"Sarkis",
  Suporte:"Cabuloso",
  Reservas:"Ferchu, Dudstheboy e k0ga",
  Técnico:"RafaP"

},
"OperationKino":{
  Topo:"Aoshi",
  Caçador:"Ranger",
  Meio:"Dynquedo",
  Atirador:"Luskka",
  Suporte:"BocaJúnior",
  Reservas:"Akrinuss, Apollo, Kier e Kvrak",
  Técnico:"Dionrray"
},
"intze-sports":{
  Topo:"Ayel",
  Caçador:"Turtle",
  Meio:"Envy",
  Atirador:"MicaO",
  Suporte:"Jockster",
  Reservas:"Daniels, Verto, Marf e SNK",
  Técnico:"Gevous"

},
"KeydStars":{
  Topo:"Yang",
  Caçador:"Revolta",
  Meio:"Takeshi",
  Atirador:"Esa",
  Suporte:"Ziriguidun",
  Reservas:"Verfix, Krastyel e Manajj",
  Técnico:"Djokovic"

}

}
// Código que pega o parâmetro da URL. Copie e cole no seu código
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function exibeTimes(item) {
  document.getElementById("logo_times").src = item.imagem;
  document.getElementById("topo_times").src = item.Topo;
  document.getElementById("caçador_times").innerHTML = item.Caçador;
  document.getElementById("meio_times").innerHTML = item.Meio;
  document.getElementById("atirador_times").innerHTML = item.Atirador;
  document.getElementById("suporte_times").innerHTML = item.Suporte;
  document.getElementById("reservas_times").innerHTML = item.Reservas;
  document.getElementById("técnico_times").innerHTML = item.Técnico;
}
