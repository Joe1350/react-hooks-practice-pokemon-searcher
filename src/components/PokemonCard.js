import React, { useState } from "react";
import { Card } from "semantic-ui-react";

// true = front sprite
// false = back sprite

function PokemonCard({ onePokemon }) {
  const [image, setImage] = useState(true)
  
  function handleFrontBackToggle() {
    setImage(image => !image)
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img
            src={image ? onePokemon.sprites.front : onePokemon.sprites.back}
            alt={onePokemon.name}
            onClick={handleFrontBackToggle}
          />
        </div>
        <div className="content">
          <div className="header">{onePokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {onePokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
