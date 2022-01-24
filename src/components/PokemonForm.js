import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function getNumber(string) {
  let charArray = string.split('')
  let numArray = charArray.filter(char => {
    if (isNaN(parseInt(char)) === false) {
      return parseInt(char)
    }
  })
  return parseInt(numArray.join(''))
}

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    const newPokemon = {
      id: getNumber(formData.frontUrl),
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(newPokemon => onAddPokemon(newPokemon))
    // post request here
    // after post request we need to get a callback prop to pass up the newPokemon
  }

  function handleChange(e) {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            id="hp"
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            id="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            id="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
