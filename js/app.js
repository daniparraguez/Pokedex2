const pokeinfo = document.getElementById('pokeinfo');
const pokenombre = document.getElementById('pokenombre').value;
const apiurl = (`https://pokeapi.co/api/v2/pokemon/${pokenombre}`);

document.getElementById('pokebusca').addEventListener('click', buscarPoke);
function buscarPoke(){
fetch(apiurl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    const pokeImg = data.sprites.front_default;
    const pokeName = data.name;
    const pokeNumber = data.order;
    const pokeWeight = data.weight;
    const pokeAbilities = data.abilities[1].ability.name;
    const pokeExperience = data.abilities.base_experience;

    let html = `<h2>${pokeName}</h2>
      <p>${pokeWeight}</p>
      <p>${pokeAbilities}</p>
      <p>${pokeExperience}</p>
      <img src='https://pokeapi.co/media/img/${pokeNumber}.png'>
    `;

    //Put that HTML on the page
    pokeinfo.innerHTML = html;
  });
};