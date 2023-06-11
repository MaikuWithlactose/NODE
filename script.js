const form = document.getElementById('pokemonForm');
const pokemonInfo = document.getElementById('pokemonInfo');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const pokemonName = document.getElementById('pokemonName').value;
    fetchPokemonData(pokemonName);
});

function fetchPokemonData(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            showPokemonInfo(data);
        })
        .catch(error => {
            console.log('Error:', error);
            pokemonInfo.innerHTML = 'Ha ocurrido un error. Inténtalo nuevamente.';
        });
}

function showPokemonInfo(data) {
    const name = data.name;
    const imageUrl = data.sprites.front_default;
    const abilities = data.abilities.map(ability => ability.ability.name);

    let cardHtml = `<div class="card">
                        <img src="${imageUrl}" alt="${name}">
                        <div class="card-content">
                            <h2>${name}</h2>
                            <p>Habilidades: ${abilities.join(', ')}</p>
                        </div>
                    </div>`;

    pokemonInfo.innerHTML = cardHtml;
}
