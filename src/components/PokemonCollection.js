import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonList = pokemon.map(onePokemon => (
    <PokemonCard key={onePokemon.id} onePokemon={onePokemon} />
  ))
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
