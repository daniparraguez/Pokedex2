$(document).ready(function(){

$('#pokebusca').click(function() {

  const pokenombre = $('#pokenombre').val();
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokenombre}`,
    type: 'GET',
    datatype: 'json',
    success: function(results) {
      console.log(results);
    }
  }).done(response).fail(error);
  function response(data) {
    $('#pokeinfo').empty();
    const pokeName = data.name;
    const pokeNumber = data.id;
    const pokeWeight = data.weight;
    const pokeAbilities = data.abilities[0].ability.name;
    const pokeAbilities2 = data.abilities[1].ability.name;
    const pokeExperience = data.base_experience;


    $('#pokeinfo').append(`<h2>${pokeName}</h2>
      <p>Weight: ${pokeWeight}</p><p>Número: ${pokeNumber}</p><p>Habilidades: ${pokeAbilities}</p><p>Más habilildades: ${pokeAbilities2}</p><p>Experiencia: ${pokeExperience}</p>
      <img src='https://pokeapi.co/media/img/${pokeNumber}.png'>
    `);
  };

  function error() {
    alert('Pokerror!');
  }
});

});