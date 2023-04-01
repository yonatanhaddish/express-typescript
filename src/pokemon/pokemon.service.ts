export const getPokemonList = async () => {
    console.log("pokemon.service");
    const request = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await request.json();
    return data;
}